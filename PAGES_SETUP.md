# GitHub Pages Setup Checklist

## Option A: GitHub Actions (recommended)

1. Go to **https://github.com/ianjimin/ianjimin.github.io/settings/pages**
2. Under **Source**, select **"GitHub Actions"**
3. Go to **https://github.com/ianjimin/ianjimin.github.io/actions**
4. Click **"Deploy to GitHub Pages"** → **"Run workflow"** → **"Run workflow"**
5. Wait for the run to finish (green checkmark), then open **https://ianjimin.github.io**

## Option B: Deploy from branch (if Option A fails)

1. Go to **https://github.com/ianjimin/ianjimin.github.io/settings/pages**
2. Under **Source**, select **"Deploy from a branch"**
3. **Branch:** `gh-pages` | **Folder:** `/ (root)`
4. Save, then open **https://ianjimin.github.io**

## Troubleshooting

- **Blank page:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- **404:** Wait 2–3 minutes after deploy
- **Check workflow:** Actions tab → latest run → all steps green
