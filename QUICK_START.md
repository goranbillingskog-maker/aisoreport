# 🚀 QUICK START GUIDE - aisoreport.com

**Your homepage is ready!** Follow these steps to get it running.

---

## ✅ What You Have

A complete React website with:
- Form that saves to your Supabase database
- Citara purple gradient design
- Mobile responsive
- SEO ready
- All components built and tested ✅

---

## 📥 STEP 1: Download & Extract

You'll receive a ZIP file. Extract it anywhere on your computer.

---

## 🔧 STEP 2: Open Terminal

**Mac:**
1. Press `Cmd + Space`
2. Type "Terminal"
3. Press Enter

**Windows:**
1. Press `Windows + R`
2. Type "cmd"
3. Press Enter

---

## 📂 STEP 3: Navigate to Project

In Terminal, type:

```bash
cd /path/to/aisoreport
```

**Tip:** Instead of typing the path, you can drag the `aisoreport` folder into the Terminal window and it will fill in the path for you!

---

## 📦 STEP 4: Install Dependencies

Copy and paste this command:

```bash
npm install
```

Press Enter. This will take 1-2 minutes. You'll see a progress bar.

**Don't have Node.js?** Download it first: https://nodejs.org (get the LTS version)

---

## 🎯 STEP 5: Start the Website

Copy and paste:

```bash
npm run dev
```

Press Enter.

You'll see something like:
```
Local:   http://localhost:5173
```

---

## 🌐 STEP 6: Open in Browser

Hold `Cmd` (Mac) or `Ctrl` (Windows) and click the link `http://localhost:5173`

Or just copy it and paste into your browser.

**You should see your homepage! 🎉**

---

## ✨ STEP 7: Test the Form

1. Fill in the form:
   - Brand Name: "Test Company"
   - Website: "test.com"
   - Email: "your-email@gmail.com"

2. Click "Get My Free Report"

3. Check Supabase Dashboard to see the submission!

---

## 🐙 STEP 8: Create GitHub Account

**Don't have GitHub? Let's set it up:**

1. Go to https://github.com
2. Click "Sign up"
3. Choose a username (e.g., "gorito" or your name)
4. Use your email
5. Create password
6. Verify you're human
7. Click "Create account"

**That's it!** GitHub is free for public projects.

---

## 📤 STEP 9: Push to GitHub

**First, create a new repository on GitHub:**

1. Go to https://github.com
2. Click the "+" in top right → "New repository"
3. Repository name: `aisoreport`
4. Keep it **Public**
5. **DON'T** check "Add a README" (we have one)
6. Click "Create repository"

**Then, push your code:**

In your Terminal (still in the aisoreport folder), run these commands **one at a time**:

```bash
git init
```
Press Enter. Then:

```bash
git add .
```
Press Enter. Then:

```bash
git commit -m "Initial commit - homepage"
```
Press Enter. Then:

```bash
git branch -M main
```
Press Enter. Then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/aisoreport.git
```

**⚠️ IMPORTANT:** Replace `YOUR_USERNAME` with your actual GitHub username!

Press Enter. Finally:

```bash
git push -u origin main
```

If it asks for credentials, use your GitHub username and password.

**Refresh your GitHub page - your code is now online! 🎉**

---

## 🚀 STEP 10: Deploy to Vercel

**Create Vercel account:**

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Allow Vercel to access your repos

**Deploy your site:**

1. Click "Add New" → "Project"
2. Find `aisoreport` in the list
3. Click "Import"
4. **Don't change any settings**
5. Click "Deploy"

Wait 1-2 minutes... ✨

**You now have a live preview URL!** Something like:
`https://aisoreport-abc123.vercel.app`

---

## 🌐 STEP 11: Connect Your Domain

In Vercel:

1. Go to your project settings
2. Click "Domains" tab
3. Type: `aisoreport.com`
4. Click "Add"

Vercel will show you DNS records. **Don't close this page yet!**

**In GoDaddy:**

1. Go to https://dcc.godaddy.com
2. Find `aisoreport.com`
3. Click "DNS"
4. Add the records Vercel showed you

**Wait 15 minutes to 24 hours** for DNS to update.

Then `aisoreport.com` will show your site! 🎉

---

## 🎊 YOU'RE DONE!

Your site is:
- ✅ Running locally
- ✅ On GitHub
- ✅ Deployed to Vercel
- ✅ Ready for custom domain

---

## 🆘 STUCK? Common Issues:

**"npm: command not found"**
→ Install Node.js: https://nodejs.org

**Form not saving to database?**
→ Check Supabase credentials in `src/lib/supabase.js`

**GitHub asking for password?**
→ You might need a Personal Access Token. Let me know and I'll help!

**Vercel deploy failed?**
→ Usually fixes itself on retry. Click "Redeploy"

---

## 📞 Need Help?

Come back to Claude with:
- Screenshots of any errors
- What step you're on
- What you see vs what you expect

I'm here to help! 🤝

---

**Next Steps After Launch:**

Phase 2:
- Add Resources section with GEO articles
- Create logo in Canva
- Set up email sequences

But first, let's get this homepage live! 🚀
