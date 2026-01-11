# 🚀 Quick Deployment Reference

Quick commands and configurations for deploying your Mini Course Subscription App.

## 📋 Quick Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Render Dashboard**: https://dashboard.render.com
- **MongoDB Atlas**: https://cloud.mongodb.com
- **Razorpay Dashboard**: https://dashboard.razorpay.com

---

## 🔧 Environment Variables

### Backend (Render)

```env
MONGODB_URI=mongodb+srv://bobby_db_user:fAbwQrRRfFsp7hYR@cluster0.7ngingo.mongodb.net/mini_course_app?appName=Cluster0
JWT_SECRET=black_friday_secret_key_2026
RAZORPAY_KEY_ID=rzp_test_Rpo0EOJg7fykdF
RAZORPAY_KEY_SECRET=BBxJ85KPIdmrCHivbV5dtmTJ
PORT=5000
```

### Frontend (Vercel)

```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

---

## 🛠️ Render Configuration

| Setting            | Value            |
| ------------------ | ---------------- |
| **Root Directory** | `server`         |
| **Build Command**  | `npm install`    |
| **Start Command**  | `node server.js` |
| **Runtime**        | Node             |
| **Branch**         | `main`           |

---

## 🛠️ Vercel Configuration

| Setting              | Value           |
| -------------------- | --------------- |
| **Framework**        | Vite            |
| **Root Directory**   | `./`            |
| **Build Command**    | `npm run build` |
| **Output Directory** | `dist`          |
| **Install Command**  | `npm install`   |

---

## 📦 Git Commands

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# Regular updates
git add .
git commit -m "Your commit message"
git push origin main
```

---

## 🧪 Test Credentials

```
Email: john@example.com
Password: password123

Promo Code: BFSALE25 (50% discount)
```

---

## 🔍 Testing Endpoints

### Backend Health Check

```
GET https://your-backend-url.onrender.com/
```

Expected Response:

```json
{
  "success": true,
  "message": "Mini Course Subscription API - Black Friday Edition",
  "version": "1.0.0"
}
```

### Test Login

```bash
curl -X POST https://your-backend-url.onrender.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Get Courses

```bash
curl https://your-backend-url.onrender.com/courses
```

---

## 🐛 Common Issues

### CORS Error

**Fix**: Update `server/server.js`

```javascript
app.use(cors({ origin: "*" }));
```

### 404 on Refresh

**Fix**: Ensure `vercel.json` exists with:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Environment Variables Not Working

**Fix**:

- Ensure variables start with `VITE_` for frontend
- Redeploy after adding variables
- Check spelling and values in dashboard

### Render Backend Sleeping

**Fix**:

- Upgrade to paid tier, OR
- Use UptimeRobot to ping every 5 minutes

---

## 📊 Monitoring

### View Logs

**Render**:

1. Go to Dashboard → Your Service
2. Click "Logs" tab
3. View real-time logs

**Vercel**:

1. Go to Dashboard → Your Project
2. Click "Deployments"
3. Click on specific deployment
4. View build and runtime logs

---

## 🔄 Redeploy

### Trigger Manual Redeploy

**Render**:

1. Go to Dashboard → Your Service
2. Click "Manual Deploy" → "Deploy latest commit"

**Vercel**:

1. Go to Dashboard → Your Project → Deployments
2. Click "..." on latest deployment
3. Click "Redeploy"

### Automatic Redeploy

Both platforms auto-deploy on git push to main branch.

---

## 📱 Submission Template

```markdown
# Mini Course Subscription Application - Black Friday Edition

## 🔗 Live Demo

- **Frontend**: https://your-app.vercel.app
- **Backend API**: https://your-api.onrender.com

## 📦 Repository

- **GitHub**: https://github.com/yourusername/black_friday_edition

## 👤 Test Credentials

- **Email**: john@example.com
- **Password**: password123

## 🎟️ Promo Code

- **Code**: BFSALE25
- **Discount**: 50% off all paid courses

## ✨ Features

- User Authentication (JWT)
- Course Catalog (Free & Paid)
- Promo Code System
- Razorpay Payment Integration
- My Courses Dashboard
- Black Friday Theme

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB Atlas
- **Payment**: Razorpay
- **Hosting**: Vercel + Render
```

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **MongoDB Docs**: https://docs.mongodb.com
- **Razorpay Docs**: https://razorpay.com/docs

---

**Last Updated**: January 2026
