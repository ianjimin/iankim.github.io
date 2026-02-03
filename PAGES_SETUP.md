# Fix: Site Not Showing

## Step 1: Change Pages source

1. Open: **https://github.com/ianjimin/ianjimin.github.io/settings/pages**
2. Under **"Build and deployment"** → **Source**
3. Select **"Deploy from a branch"** (not "GitHub Actions")
4. **Branch:** choose **gh-pages**
5. **Folder:** choose **/ (root)**
6. Click **Save**

## Step 2: Wait

Wait 1–2 minutes, then open **https://ianjimin.github.io**

## Step 3: If still blank

1. Go to **Actions** → **Deploy to GitHub Pages** → **Run workflow**
2. Wait for the run to finish (green checkmark)
3. Refresh https://ianjimin.github.io
