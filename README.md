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

![Home Page](./public/screenshots/web1.png)

### Course Detail

![Course Detail](./public/screenshots/web3.png)

### My Courses

![My Courses](./public/screenshots/web2.png)

### footer Page

![Payment Page](./public/screenshots/footer.png)

### login Page

![Payment Page](./public/screenshots/login.png)

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

## 🚀 Hosting & Deployment Guide

Deploy your application with **Vercel** (Frontend) and **Render** (Backend) for a production-ready setup.

### Prerequisites

- GitHub account
- Vercel account ([vercel.com](https://vercel.com))
- Render account ([render.com](https://render.com))
- MongoDB Atlas database (already configured)

---

### 1️⃣ Backend Deployment (Render - Express + MongoDB)

#### Step 1: Prepare Backend for Deployment

Ensure your `server` folder has the following structure:

```
server/
├── models/
├── routes/
├── middleware/
├── server.js
├── seed.js
├── package.json
└── .env.local (not committed to Git)
```

#### Step 2: Update CORS Configuration

Edit `server/server.js` to allow requests from your Vercel frontend:

```javascript
// Update CORS middleware
app.use(
  cors({
    origin: "*", // Allow all origins (or specify your Vercel URL)
    credentials: true,
  })
);
```

#### Step 3: Push Code to GitHub

```bash
# If not already initialized
git init
git add .
git commit -m "Prepare for deployment"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

#### Step 4: Deploy on Render

1. Go to [render.com](https://render.com) and sign in
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. Configure the service:

| Setting            | Value                                      |
| ------------------ | ------------------------------------------ |
| **Name**           | `mini-course-api` (or your preferred name) |
| **Region**         | Select closest to your users               |
| **Branch**         | `main`                                     |
| **Root Directory** | `server`                                   |
| **Runtime**        | `Node`                                     |
| **Build Command**  | `npm install`                              |
| **Start Command**  | `node server.js`                           |
| **Instance Type**  | Free                                       |

5. Click **Advanced** and add environment variables:

```env
MONGODB_URI=mongodb+srv://bobby_db_user:fAbwQrRRfFsp7hYR@cluster0.7ngingo.mongodb.net/mini_course_app?appName=Cluster0
JWT_SECRET=black_friday_secret_key_2026
RAZORPAY_KEY_ID=rzp_test_Rpo0EOJg7fykdF
RAZORPAY_KEY_SECRET=BBxJ85KPIdmrCHivbV5dtmTJ
PORT=5000
```

> **⚠️ Important**: Change these credentials before production deployment!

6. Click **Create Web Service**
7. Wait for deployment to complete (5-10 minutes)
8. Copy your backend URL (e.g., `https://mini-course-api.onrender.com`)

#### Step 5: Test Backend API

Visit your backend URL in a browser. You should see:

```json
{
  "success": true,
  "message": "Mini Course Subscription API - Black Friday Edition",
  "version": "1.0.0"
}
```

---

### 2️⃣ Frontend Deployment (Vercel - React + Vite)

#### Step 1: Update API Base URL

Edit `src/services/api.js`:

```javascript
// Replace localhost URL with your Render backend URL
const API_BASE_URL = "https://mini-course-api.onrender.com";
```

Or use environment variables (recommended):

```javascript
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";
```

#### Step 2: Create Environment File (Optional)

Create `.env.production` in the root directory:

```env
VITE_API_BASE_URL=https://mini-course-subscription-application.onrender.com/
```

#### Step 3: Add Vercel Configuration

Create `vercel.json` in the root directory:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

This ensures React Router works correctly on page refresh.

#### Step 4: Commit Changes

```bash
git add .
git commit -m "Configure for Vercel deployment"
git push origin main
```

#### Step 5: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Configure the project:

| Setting              | Value                |
| -------------------- | -------------------- |
| **Framework Preset** | `Vite`               |
| **Root Directory**   | `./` (leave as root) |
| **Build Command**    | `npm run build`      |
| **Output Directory** | `dist`               |
| **Install Command**  | `npm install`        |

5. Add environment variables (if using `.env.production`):

```
VITE_API_BASE_URL=https://mini-course-subscription-application.onrender.com/
```

6. Click **Deploy**
7. Wait for deployment (2-5 minutes)
8. Copy your live URL (e.g., `https://mini-course-app.vercel.app`)

---

### 3️⃣ Post-Deployment Configuration

#### Update CORS (Optional - More Secure)

For production, update `server/server.js` to allow only your Vercel domain:

```javascript
app.use(
  cors({
    origin: "https://mini-course-app.vercel.app",
    credentials: true,
  })
);
```

Then redeploy on Render (it will auto-deploy on git push).

#### Seed Production Database

If you need to seed the production database:

1. Go to Render Dashboard → Your Web Service
2. Click **Shell** tab
3. Run: `node seed.js`

---

### 4️⃣ Verification Checklist

Test your deployed application:

- ✅ Visit frontend URL - homepage loads
- ✅ Login with test credentials (`john@example.com` / `password123`)
- ✅ JWT token stored in localStorage
- ✅ Courses list loads from backend
- ✅ Subscribe to a FREE course
- ✅ Apply promo code `BFSALE25` on paid course (50% discount)
- ✅ Complete Razorpay test payment
- ✅ Check "My Courses" page shows subscriptions
- ✅ Protected routes redirect to login when not authenticated
- ✅ Logout functionality works

---

### 5️⃣ Common Issues & Fixes

#### ❌ CORS Error

**Problem**: Frontend can't connect to backend

**Solution**:

```javascript
// In server/server.js
app.use(cors({ origin: "*" }));
```

#### ❌ API Not Connecting

**Problem**: Frontend shows "Network Error"

**Solutions**:

- Verify backend URL in `src/services/api.js`
- Check Render backend status (should be green/active)
- Test backend URL directly in browser

#### ❌ 404 on Page Refresh (Vercel)

**Problem**: Refreshing `/courses` or other routes shows 404

**Solution**: Add `vercel.json` with rewrites (see Step 2.3 above)

#### ❌ Environment Variables Not Working

**Problem**: `import.meta.env.VITE_API_BASE_URL` is undefined

**Solutions**:

- Ensure variable starts with `VITE_`
- Redeploy after adding environment variables
- Check Vercel project settings → Environment Variables

#### ❌ Render Backend Sleeping

**Problem**: First request takes 30+ seconds

**Explanation**: Render free tier spins down after inactivity

**Solutions**:

- Upgrade to paid tier for always-on service
- Use a service like UptimeRobot to ping your backend every 5 minutes

---

### 6️⃣ Submission Links Template

Use this format for your project submission:

```
🔗 Live Demo
Frontend: https://mini-course-subscription-applicatio.vercel.app/
Backend API: https://mini-course-subscription-application.onrender.com

📦 Repository
GitHub: https://github.com/bobbydasari/Mini-Course-Subscription-Application

👤 Test Credentials
Email: john@example.com
Password: password123

🎟️ Promo Code
Code: BFSALE25 (50% discount)
```

---

### 7️⃣ Continuous Deployment

Both Vercel and Render support automatic deployments:

- **Vercel**: Auto-deploys on every push to `main` branch
- **Render**: Auto-deploys on every push to `main` branch

To trigger a new deployment:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

---

### 8️⃣ Monitoring & Logs

#### Vercel Logs

- Go to Vercel Dashboard → Your Project → Deployments
- Click on any deployment to view build logs
- Use **Functions** tab to see runtime logs

#### Render Logs

- Go to Render Dashboard → Your Web Service
- Click **Logs** tab to view real-time server logs
- Use **Events** tab to see deployment history

---

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
