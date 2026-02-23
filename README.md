# 🌿 Madanur Village Website
**Our Village • Our Pride** — మదనూరు గ్రామం  
Prakasam District, Andhra Pradesh, India

A production-ready village website built with React (Vite), Tailwind CSS, Firebase Authentication, and Firebase Realtime Database.

---

## 📁 Project Structure

```
madanur/
├── public/
│   ├── favicon.svg          # Village favicon
│   └── _redirects           # Netlify SPA redirect
│
├── src/
│   ├── context/
│   │   └── AuthContext.jsx  # Firebase auth state, login/signup/logout
│   │
│   ├── hooks/
│   │   └── useNews.js       # Real-time Firebase news hook
│   │
│   ├── components/
│   │   ├── Navbar.jsx       # Top navigation with auth state
│   │   ├── Footer.jsx       # Site footer
│   │   ├── ProtectedRoute.jsx  # Route guard (redirects if not logged in)
│   │   ├── SpotCard.jsx     # Beautiful spots card component
│   │   └── NewsCard.jsx     # News item card (with admin delete)
│   │
│   ├── pages/
│   │   ├── Login.jsx        # Glassmorphism login page
│   │   ├── Signup.jsx       # Registration page
│   │   ├── Home.jsx         # Main village homepage
│   │   └── Admin.jsx        # Admin panel (post/delete news)
│   │
│   ├── firebase.js          # Firebase initialization
│   ├── App.jsx              # Routing setup
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind + global styles
│
├── .env.example             # Environment variable template
├── .gitignore
├── index.html               # HTML shell with Google Fonts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Step-by-Step Installation

### 1. Clone / Copy the project

```bash
# If using git:
git clone <your-repo-url> madanur
cd madanur

# Or navigate to your project folder:
cd madanur
```

### 2. Install dependencies

```bash
npm install
```

This installs all required packages:

| Package | Purpose |
|---------|---------|
| `react` + `react-dom` | UI framework |
| `react-router-dom` | Client-side routing |
| `firebase` | Auth + Realtime Database |
| `vite` | Build tool (fast HMR) |
| `tailwindcss` | Utility-first styling |
| `autoprefixer` + `postcss` | CSS processing |

---

## 🔥 Firebase Setup

### Step 1 — Create Firebase Project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"** → Name it `madanur-village`
3. Disable Google Analytics (optional) → **Create project**

### Step 2 — Enable Authentication

1. In Firebase Console → **Build → Authentication**
2. Click **"Get started"**
3. Under **Sign-in providers**, enable **Email/Password**
4. Click **Save**

### Step 3 — Create Realtime Database

1. In Firebase Console → **Build → Realtime Database**
2. Click **"Create Database"**
3. Choose region: **asia-southeast1** (closest to AP, India)
4. Start in **Test mode** (we'll secure it later)

### Step 4 — Set Database Rules (Important!)

In Realtime Database → **Rules**, paste:

```json
{
  "rules": {
    "news": {
      ".read": "auth != null",
      ".write": "auth != null && auth.token.email === 'admin@madanur.com'"
    }
  }
}
```
> Replace `admin@madanur.com` with your actual admin email.

### Step 5 — Get Firebase Config

1. In Firebase Console → **Project settings** (gear icon)
2. Scroll to **"Your apps"** → Click **"</>"** (Web app)
3. Register app with nickname `madanur-web`
4. Copy the `firebaseConfig` object

---

## ⚙️ Environment Variables Setup

Create a `.env` file in the project root (copy from `.env.example`):

```bash
cp .env.example .env
```

Fill in your Firebase values:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=madanur-village.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://madanur-village-default-rtdb.asia-southeast1.firebasedatabase.app
VITE_FIREBASE_PROJECT_ID=madanur-village
VITE_FIREBASE_STORAGE_BUCKET=madanur-village.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123

# Admin email — this user gets admin panel access
VITE_ADMIN_EMAIL=admin@madanur.com
```

> ⚠️ **Never commit `.env` to git!** It's already in `.gitignore`.

---

## 🏃 Running Locally

```bash
npm run dev
```

Visit: **http://localhost:5173**

---

## 👤 Creating Your First Admin User

1. Run the app (`npm run dev`)
2. Go to **http://localhost:5173/signup**
3. Sign up with the **exact email** you put in `VITE_ADMIN_EMAIL`
4. After login, you'll see the **⚡ Admin** link in the navbar
5. Go to `/admin` to post village news

---

## 🌐 Deploying to Netlify

### Option A — Netlify CLI (Recommended)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy

# When asked for publish directory, enter:
dist

# After testing preview, deploy to production:
netlify deploy --prod
```

### Option B — Netlify Dashboard (Drag & Drop)

1. Run `npm run build` locally
2. Go to [https://app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder onto the Netlify dashboard
4. Done! 🎉

### Option C — GitHub Integration (Auto-deploy)

1. Push your code to GitHub (without `.env`!)
2. In Netlify: **New site from Git** → Connect GitHub repo
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in **Netlify → Site settings → Environment variables**:
   - Add all your `VITE_FIREBASE_*` variables
   - Add `VITE_ADMIN_EMAIL`
5. Click **Deploy site** — auto-deploys on every push!

---

## 🔒 Security Best Practices

1. **Database Rules** — Restrict write access to admin email only (shown above)
2. **Firebase Domain Restrictions** — In Firebase Console → Authentication → Settings → Authorized domains → Add your Netlify domain
3. **API Key Restrictions** — In Google Cloud Console, restrict your Firebase API key to your domain
4. **Environment Variables** — Never expose `.env` in git

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `earth-950` | `#13230c` | Page background |
| `earth-900` | `#29411b` | Card backgrounds |
| `earth-500` | `#619c30` | Primary green |
| `earth-300` | `#a9d082` | Highlighted text |
| `amber-400` | `#fbbf24` | Admin accents |
| Font: Display | Playfair Display | Headings |
| Font: Body | Lato | Paragraphs, labels |
| Font: Telugu | Noto Serif Telugu | Telugu script |

---

## 📱 Features Summary

| Feature | Status |
|---------|--------|
| Email/Password Auth | ✅ |
| Protected Routes | ✅ |
| Real-time Auth State | ✅ |
| Glassmorphism Login | ✅ |
| Hero Section | ✅ |
| Beautiful Spots Cards | ✅ |
| Admin News Panel | ✅ |
| Real-time News Feed | ✅ |
| Responsive Design | ✅ |
| Telugu Language Support | ✅ |
| Smooth Animations | ✅ |
| Netlify Ready | ✅ |

---

## 📞 Support

Built with ❤️ for the people of Madanur.  
**మన గ్రామం • మన గర్వం** — Our Village, Our Pride.
