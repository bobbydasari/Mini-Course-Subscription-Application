import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Course from "./models/Course.js";

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected");

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    console.log("🗑️  Cleared existing data");

    // Create dummy users
    const users = await User.create([
      {
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password123",
      },
      {
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123",
      },
    ]);
    console.log("👥 Created 3 dummy users");

    // Create courses
    const courses = await Course.create([
      {
        title: "Complete Web Development Bootcamp",
        description:
          "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build real-world projects and become a full-stack developer.",
        price: 4999,
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
        isFree: false,
      },
      {
        title: "Python for Data Science",
        description:
          "Learn Python programming, NumPy, Pandas, Matplotlib, and machine learning basics. Perfect for aspiring data scientists.",
        price: 3999,
        image:
          "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
        isFree: false,
      },
      {
        title: "Introduction to JavaScript",
        description:
          "Free course covering JavaScript fundamentals, ES6+ features, DOM manipulation, and async programming.",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
        isFree: true,
      },
      {
        title: "React Masterclass",
        description:
          "Deep dive into React hooks, context API, Redux, and advanced patterns. Build production-ready applications.",
        price: 5999,
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
        isFree: false,
      },
      {
        title: "Git & GitHub Essentials",
        description:
          "Free course on version control with Git, GitHub workflows, branching strategies, and collaboration best practices.",
        price: 0,
        image:
          "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
        isFree: true,
      },
      {
        title: "UI/UX Design Fundamentals",
        description:
          "Learn design principles, Figma, prototyping, user research, and create stunning user interfaces.",
        price: 3499,
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        isFree: false,
      },
      {
        title: "DevOps with Docker & Kubernetes",
        description:
          "Master containerization, orchestration, CI/CD pipelines, and cloud deployment strategies.",
        price: 6999,
        image:
          "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop",
        isFree: false,
      },
    ]);
    console.log("📚 Created 7 courses (3 free, 4 paid)");

    console.log("\n✨ Seed data created successfully!\n");
    console.log("📧 Dummy User Credentials:");
    console.log("1. Email: john@example.com | Password: password123");
    console.log("2. Email: jane@example.com | Password: password123");
    console.log("3. Email: admin@example.com | Password: admin123");
    console.log("\n🎟️  Promo Code: BFSALE25 (50% discount)");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seed error:", error);
    process.exit(1);
  }
};

seedData();
