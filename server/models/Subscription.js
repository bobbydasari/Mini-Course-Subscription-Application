import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    pricePaid: {
      type: Number,
      required: true,
      min: 0,
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
    paymentId: {
      type: String,
      default: null,
    },
    promoCode: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index to prevent duplicate subscriptions
subscriptionSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
