import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/400x250",
    },
    isFree: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Virtual to determine if course is free
courseSchema.virtual("displayPrice").get(function () {
  return this.price === 0 || this.isFree ? "Free" : `₹${this.price}`;
});

courseSchema.set("toJSON", { virtuals: true });
courseSchema.set("toObject", { virtuals: true });

const Course = mongoose.model("Course", courseSchema);

export default Course;
