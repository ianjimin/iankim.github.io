# Deploying to GitHub Pages

## Quick Start Guide

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it (e.g., `portfolio` or `ian-kim-portfolio`)
4. Choose Public or Private
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Push Your Code to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/iankim/portfolio.git
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. The page will automatically deploy!

### Step 4: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
```
https://iankim.github.io/portfolio/
```

## How It Works

- The `.github/workflows/deploy.yml` file automatically:
  - Builds your React app when you push to `main`
  - Deploys the `dist` folder to GitHub Pages
  - Updates your site automatically on every push

## Updating Your Site

Just push changes to the `main` branch:
```bash
git add .
git commit -m "Update portfolio"
git push
```

The GitHub Action will automatically rebuild and redeploy!

## Troubleshooting

### If your site shows a 404:
1. Wait 2-3 minutes after pushing (deployment takes time)
2. Check the **Actions** tab in your GitHub repo to see if deployment succeeded
3. Make sure you selected "GitHub Actions" as the source in Pages settings

### If assets don't load:
- The `base: './'` in `vite.config.js` should handle this
- If issues persist, you might need to set `base: '/YOUR_REPO_NAME/'` instead

### Check deployment status:
- Go to your repo → **Actions** tab
- You'll see "Deploy to GitHub Pages" workflow running
- Click on it to see build logs

## Custom Domain (Optional)

If you have a custom domain:
1. Add a `CNAME` file in `public/` folder with your domain
2. Update DNS settings as per GitHub Pages instructions
