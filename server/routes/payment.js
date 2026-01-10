import express from "express";
import crypto from "crypto";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Razorpay will be initialized dynamically
let Razorpay;
let razorpay;

// Lazy load Razorpay
const initRazorpay = async () => {
  if (!razorpay) {
    try {
      const razorpayModule = await import("razorpay");
      Razorpay = razorpayModule.default;
      razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });
    } catch (error) {
      console.error("Razorpay initialization error:", error);
      throw new Error("Payment gateway not available");
    }
  }
  return razorpay;
};

// Create Razorpay order
router.post("/create-order", authMiddleware, async (req, res) => {
  try {
    const { amount, courseId } = req.body;

    if (!amount || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Amount and course ID are required",
      });
    }

    const razorpayInstance = await initRazorpay();

    const options = {
      amount: Math.round(amount * 100), // Convert to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        courseId,
        userId: req.userId,
      },
    };

    const order = await razorpayInstance.orders.create(options);

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({
      success: false,
      message: "Error creating payment order",
    });
  }
});

// Verify Razorpay payment
router.post("/verify-payment", authMiddleware, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing payment verification parameters",
      });
    }

    // Create signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    // Verify signature
    const isValid = expectedSignature === razorpay_signature;

    if (isValid) {
      res.json({
        success: true,
        message: "Payment verified successfully",
        paymentId: razorpay_payment_id,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }
  } catch (error) {
    console.error("Verify payment error:", error);
    res.status(500).json({
      success: false,
      message: "Error verifying payment",
    });
  }
});

export default router;
