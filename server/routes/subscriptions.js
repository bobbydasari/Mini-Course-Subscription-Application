import express from "express";
import Subscription from "../models/Subscription.js";
import Course from "../models/Course.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Valid promo code
const VALID_PROMO = "BFSALE25";
const PROMO_DISCOUNT = 0.5; // 50% discount

// Subscribe to a course
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { courseId, promoCode, paymentId } = req.body;
    const userId = req.userId;

    // Validate input
    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "Course ID is required",
      });
    }

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Check if already subscribed
    const existingSubscription = await Subscription.findOne({
      userId,
      courseId,
    });
    if (existingSubscription) {
      return res.status(400).json({
        success: false,
        message: "You are already subscribed to this course",
      });
    }

    let pricePaid = course.price;

    // Handle free courses
    if (course.isFree || course.price === 0) {
      pricePaid = 0;
    }
    // Handle paid courses
    else {
      // Validate promo code if provided
      if (promoCode) {
        if (promoCode !== VALID_PROMO) {
          return res.status(400).json({
            success: false,
            message: "Invalid promo code",
          });
        }
        // Apply discount
        pricePaid = course.price * PROMO_DISCOUNT;
      }

      // For paid courses, payment ID is required
      if (!paymentId) {
        return res.status(400).json({
          success: false,
          message: "Payment ID is required for paid courses",
        });
      }
    }

    // Create subscription
    const subscription = new Subscription({
      userId,
      courseId,
      pricePaid,
      paymentId: paymentId || null,
      promoCode: promoCode || null,
    });

    await subscription.save();

    res.status(201).json({
      success: true,
      message: "Successfully subscribed to course",
      subscription,
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during subscription",
    });
  }
});

// Get user's subscribed courses
router.get("/my-courses", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    const subscriptions = await Subscription.find({ userId })
      .populate("courseId")
      .sort({ subscribedAt: -1 });

    res.json({
      success: true,
      count: subscriptions.length,
      subscriptions,
    });
  } catch (error) {
    console.error("Get my courses error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching subscriptions",
    });
  }
});

// Validate promo code
router.post("/validate-promo", authMiddleware, async (req, res) => {
  try {
    const { promoCode, courseId } = req.body;

    if (!promoCode || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Promo code and course ID are required",
      });
    }

    // Get course
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Validate promo code
    if (promoCode !== VALID_PROMO) {
      return res.status(400).json({
        success: false,
        message: "Invalid promo code",
      });
    }

    const discountedPrice = course.price * PROMO_DISCOUNT;

    res.json({
      success: true,
      message: "Promo code applied successfully",
      originalPrice: course.price,
      discountedPrice,
      discount: PROMO_DISCOUNT * 100,
    });
  } catch (error) {
    console.error("Validate promo error:", error);
    res.status(500).json({
      success: false,
      message: "Server error validating promo code",
    });
  }
});

export default router;
