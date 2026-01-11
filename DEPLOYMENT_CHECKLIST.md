# 🚀 Deployment Checklist

Use this checklist to ensure a smooth deployment process.

## Pre-Deployment

- [ ] All code is committed and pushed to GitHub
- [ ] MongoDB Atlas database is set up and accessible
- [ ] Razorpay test credentials are configured
- [ ] Local development environment is working correctly
- [ ] All tests pass locally

## Backend Deployment (Render)

### Setup

- [ ] Create Render account at https://render.com
- [ ] Connect GitHub repository to Render
- [ ] Create new Web Service

### Configuration

- [ ] Set Root Directory to `server`
- [ ] Set Build Command to `npm install`
- [ ] Set Start Command to `node server.js`
- [ ] Select Node runtime

### Environment Variables

Add these in Render dashboard:

- [ ] `MONGODB_URI` - Your MongoDB Atlas connection string
- [ ] `JWT_SECRET` - Your JWT secret key
- [ ] `RAZORPAY_KEY_ID` - Your Razorpay test key ID
- [ ] `RAZORPAY_KEY_SECRET` - Your Razorpay test key secret
- [ ] `PORT` - Set to `5000` (or leave empty for default)

### Verification

- [ ] Deployment completes successfully
- [ ] Backend URL is accessible (e.g., https://mini-course-api.onrender.com)
- [ ] Health check endpoint returns success message
- [ ] Copy backend URL for frontend configuration

## Frontend Deployment (Vercel)

### Preparation

- [ ] Update `src/services/api.js` with backend URL OR
- [ ] Create `.env.production` with `VITE_API_BASE_URL`
- [ ] Verify `vercel.json` exists in root directory
- [ ] Commit and push changes to GitHub

### Setup

- [ ] Create Vercel account at https://vercel.com
- [ ] Import GitHub repository
- [ ] Select root directory (`.`)

### Configuration

- [ ] Framework Preset: `Vite`
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Install Command: `npm install`

### Environment Variables (if using .env.production)

- [ ] Add `VITE_API_BASE_URL` with your Render backend URL

### Verification

- [ ] Deployment completes successfully
- [ ] Frontend URL is accessible (e.g., https://mini-course-app.vercel.app)
- [ ] Copy frontend URL

## Post-Deployment Testing

### Authentication

- [ ] Login page loads correctly
- [ ] Can login with test credentials (john@example.com / password123)
- [ ] JWT token is stored in localStorage
- [ ] Logout functionality works

### Course Features

- [ ] Homepage displays all courses
- [ ] Course details page loads correctly
- [ ] Free course subscription works
- [ ] Paid course shows correct pricing

### Payment Flow

- [ ] Promo code `BFSALE25` applies 50% discount
- [ ] Razorpay payment modal opens
- [ ] Test payment completes successfully
- [ ] Subscription is recorded in database

### My Courses

- [ ] "My Courses" page displays subscribed courses
- [ ] Course details are accurate
- [ ] Navigation works correctly

### Protected Routes

- [ ] Unauthenticated users are redirected to login
- [ ] Authenticated users can access protected pages
- [ ] Session persists on page refresh

### Cross-Browser Testing

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari (if available)
- [ ] Test on mobile device

## Optional: Production Hardening

### Security

- [ ] Update CORS in `server/server.js` to specific Vercel domain
- [ ] Redeploy backend after CORS update
- [ ] Change MongoDB credentials for production
- [ ] Use production Razorpay keys (when going live)
- [ ] Update JWT_SECRET to a strong random value

### Performance

- [ ] Consider Render paid tier to avoid cold starts
- [ ] Set up UptimeRobot to keep backend alive
- [ ] Enable Vercel Analytics (optional)

### Database

- [ ] Seed production database with courses
- [ ] Create admin user if needed
- [ ] Verify database indexes

## Submission

### Documentation

- [ ] README.md is up to date
- [ ] Screenshots are added to README
- [ ] All setup instructions are clear

### Links

- [ ] Frontend URL: ****************\_\_\_****************
- [ ] Backend URL: ****************\_\_\_****************
- [ ] GitHub Repository: ****************\_\_\_****************

### Test Credentials

Document these for reviewers:

```
Email: john@example.com
Password: password123
Promo Code: BFSALE25
```

## Troubleshooting

If you encounter issues, check:

- [ ] Render logs for backend errors
- [ ] Vercel deployment logs for build errors
- [ ] Browser console for frontend errors
- [ ] Network tab for API request failures
- [ ] Environment variables are set correctly
- [ ] CORS configuration allows your frontend domain
- [ ] MongoDB connection string is correct

## Continuous Deployment

- [ ] Verify auto-deployment works on git push
- [ ] Test deployment with a small change
- [ ] Monitor deployment logs

---

## Notes

Add any deployment-specific notes here:

-
-
-

---

**Deployment Date:** ******\_\_\_******
**Deployed By:** ******\_\_\_******
**Status:** ⬜ In Progress | ⬜ Completed | ⬜ Issues Found
