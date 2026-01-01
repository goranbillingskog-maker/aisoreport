# aisoreport.com - Free AI Visibility Reports

A lead generation tool that provides free one-time AI visibility reports and funnels to Citara.ai paid subscriptions.

## 🚀 What's Built

**Homepage includes:**
- Hero section with 3-field form (Brand Name + Website URL + Email)
- Form validation (proper URLs, valid emails)
- Supabase integration (saves to `free_report_requests` table)
- "How It Works" section (3-step process)
- Benefits section
- CTA to Citara.ai
- Professional footer
- Citara purple gradient styling (#667eea → #764ba2)
- Fully mobile responsive

## 📋 Prerequisites

- Node.js 18+ installed ([download here](https://nodejs.org))
- Supabase database with `free_report_requests` table (✅ already configured)
- Git installed ([download here](https://git-scm.com/downloads))

## 🏃 Running Locally

### First Time Setup:

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open in browser:**
```
http://localhost:5173
```

You should see your homepage! Try submitting the form to test Supabase integration.

### Ongoing Development:

Just run `npm run dev` anytime you want to work on the site.

## 🌐 Deploying to Vercel

### Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click "New repository"
3. Name it: `aisoreport`
4. Keep it Public
5. DON'T initialize with README (we have one)
6. Click "Create repository"

### Step 2: Push Code to GitHub

In your terminal (in the aisoreport folder):

```bash
git init
git add .
git commit -m "Initial commit - aisoreport.com homepage"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aisoreport.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your `aisoreport` repository
5. Keep all default settings
6. Click "Deploy"

Vercel will automatically:
- Build your site
- Give you a preview URL (aisoreport.vercel.app)
- Set up automatic deployments (every git push deploys)

### Step 4: Connect Custom Domain

1. In Vercel project settings → "Domains"
2. Add domain: `aisoreport.com`
3. Vercel gives you DNS records
4. Go to GoDaddy DNS settings
5. Add the DNS records Vercel provides
6. Wait 15min-24hrs for propagation
7. aisoreport.com will be live! 🎉

## 📁 Project Structure

```
aisoreport/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero + Form
│   │   ├── HowItWorks.jsx     # 3-step process
│   │   ├── Benefits.jsx       # Value props + CTA
│   │   └── Footer.jsx         # Footer with Citara link
│   ├── lib/
│   │   └── supabase.js        # Supabase client
│   ├── App.jsx                # Main app
│   ├── main.jsx               # Entry point
│   └── index.css              # Tailwind styles
├── index.html                 # HTML with SEO meta tags
├── tailwind.config.js         # Citara gradient colors
└── package.json               # Dependencies
```

## 🔧 Tech Stack

- **React** - UI framework
- **Vite** - Build tool (super fast)
- **Tailwind CSS** - Styling with Citara gradient
- **Supabase** - Database (form submissions)
- **Vercel** - Hosting (free tier)

## ✨ Features

**Form Validation:**
- Brand name required
- Website URL validated (adds https:// if missing)
- Email format validated
- Clear error messages
- Success confirmation

**Design:**
- Citara brand gradient (#667eea → #764ba2)
- Clean, modern interface
- Mobile responsive
- Fast loading
- Professional typography (Inter font)

**SEO Ready:**
- Meta tags for social sharing
- Open Graph tags (Facebook)
- Twitter Card tags
- Descriptive title and description

## 📊 Database

Form submissions save to Supabase:

**Table:** `free_report_requests`
**Columns:**
- brand_name (text)
- website_url (text) 
- email (text)
- created_at (timestamp)
- report_sent (boolean)
- converted_to_paid (boolean)

## 🚧 Next Steps (Phase 2)

Once homepage is live:

1. **Add Resources section** (/resources)
   - Migrate 3 GEO articles from Citara.ai
   - Hub page listing all articles
   - Individual article pages

2. **Set up Tarvent email sequences**
   - Welcome email with report
   - Educational sequence (7 emails)
   - Conversion to Citara.ai

3. **Create logo** (optional but nice to have)
   - Use Canva
   - Purple gradient theme
   - Add to homepage header

## 💡 Making Updates

**To update the homepage:**

1. Edit files in `src/`
2. Test locally: `npm run dev`
3. Commit changes: `git add . && git commit -m "Update homepage"`
4. Push to GitHub: `git push`
5. Vercel auto-deploys (30 seconds later, live!)

## 📞 Support

- **Supabase Dashboard:** https://supabase.com/dashboard
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/YOUR_USERNAME/aisoreport

---

Built with ❤️ for Citara.ai | December 2025
