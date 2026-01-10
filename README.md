# Mini Course Subscription Application - Black Friday Edition 🎓🎉

A full-stack course subscription platform with authentication, promo code validation, and Razorpay payment integration.

## 🚀 Features

- **User Authentication**: JWT-based login/signup system
- **Course Catalog**: Browse free and premium courses
- **Instant Subscription**: One-click subscription for free courses
- **Promo Code System**: Apply **BFSALE25** for 50% discount on paid courses
- **Payment Integration**: Razorpay payment gateway (test mode)
- **My Courses**: Track all subscribed courses
- **Black Friday Theme**: Modern, premium UI with gradient effects

## 📸 Screenshots

### Home Page

![Home Page](https://via.placeholder.com/800x400?text=Black+Friday+Course+Catalog)

### Course Detail

![Course Detail](https://via.placeholder.com/800x400?text=Course+Subscription+Page)

### My Courses

![My Courses](https://via.placeholder.com/800x400?text=My+Subscribed+Courses)

## 🛠️ Tech Stack

### Backend

- **Node.js** + **Express.js**
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Razorpay** for payments

### Frontend

- **React** (Vite)
- **React Router** for navigation
- **Bootstrap** + **React Bootstrap** for UI
- **Axios** for API calls
- **React Toastify** for notifications

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- Razorpay account (test mode)

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd black_friday_edition
```

### 2. Install dependencies

**Frontend:**

```bash
npm install
```

**Backend:**

```bash
cd server
npm install
```

### 3. Environment Variables

Create `.env` file in the `server` directory:

```env
MONGODB_URI=mongodb+srv://bobby_db_user:fAbwQrRRfFsp7hYR@cluster0.7ngingo.mongodb.net/mini_course_app?appName=Cluster0
JWT_SECRET=black_friday_secret_key_2026
RAZORPAY_KEY_ID=rzp_test_Rpo0EOJg7fykdF
RAZORPAY_KEY_SECRET=BBxJ85KPIdmrCHivbV5dtmTJ
PORT=5001
```

### 4. Seed the Database

```bash
cd server
npm run seed
```

This will create:

- 3 dummy users
- 7 courses (3 free, 4 paid)

### 5. Start the Application

**Terminal 1 - Backend:**

```bash
cd server
npm start
```

**Terminal 2 - Frontend:**

```bash
npm run dev
```

The application will be available at:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5001

## 👤 Test Credentials

Use these credentials to login:

| Email             | Password    |
| ----------------- | ----------- |
| john@example.com  | password123 |
| jane@example.com  | password123 |
| admin@example.com | admin123    |

## 🎟️ Promo Code

Use **BFSALE25** for **50% discount** on all paid courses!

## 📚 Available Courses

### Free Courses

1. Introduction to JavaScript
2. Git & GitHub Essentials

### Paid Courses

1. Complete Web Development Bootcamp - ₹4999
2. Python for Data Science - ₹3999
3. React Masterclass - ₹5999
4. UI/UX Design Fundamentals - ₹3499
5. DevOps with Docker & Kubernetes - ₹6999

## 🔄 API Endpoints

### Authentication

- `POST /auth/signup` - Register new user
- `POST /auth/login` - Login user

### Courses

- `GET /courses` - Get all courses
- `GET /courses/:id` - Get course by ID

### Subscriptions

- `POST /subscribe` - Subscribe to a course
- `GET /subscribe/my-courses` - Get user's subscribed courses
- `POST /subscribe/validate-promo` - Validate promo code

### Payment

- `POST /payment/create-order` - Create Razorpay order
- `POST /payment/verify-payment` - Verify payment signature

## 🎨 Design Features

- **Black Friday Theme**: Purple/pink gradients with dark backgrounds
- **Glassmorphism**: Transparent cards with backdrop blur effects
- **Smooth Animations**: Fade-in effects and hover transitions
- **Responsive Design**: Mobile, tablet, and desktop friendly
- **Toast Notifications**: Real-time feedback for user actions

## 🧪 Testing

### Free Course Subscription

1. Login with test credentials
2. Click on a FREE course
3. Click "Subscribe Now"
4. Check "My Courses" to verify subscription

### Paid Course with Promo

1. Login with test credentials
2. Click on a PAID course
3. Enter promo code: **BFSALE25**
4. Click "Apply" to see 50% discount
5. Click "Subscribe" to initiate Razorpay payment
6. Complete test payment
7. Check "My Courses" to verify subscription

## 📁 Project Structure

```
black_friday_edition/
├── server/
│   ├── models/
│   │   ├── User.js
│   │   ├── Course.js
│   │   └── Subscription.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── courses.js
│   │   ├── subscriptions.js
│   │   └── payment.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   ├── seed.js
│   └── package.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CourseCard.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Home.jsx
│   │   ├── CourseDetail.jsx
│   │   └── MyCourses.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

## 🚨 Important Notes

- This is a **test/demo application** - no real payments are processed
- Razorpay is configured in **test mode**
- MongoDB credentials are for demonstration purposes
- Change all credentials before deploying to production

## 🤝 Contributing

This is a demonstration project for educational purposes.

## 📄 License

MIT License

## 👨‍💻 Author

Built with ❤️ for the Black Friday Edition Challenge

---

**Happy Learning! 🎓**
