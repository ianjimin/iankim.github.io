# GitHub Pages Setup Checklist

Your site must use **GitHub Actions** as the source. Follow these steps exactly:

## 1. Open Pages settings

Go to: **https://github.com/ianjimin/ianjimin.github.io/settings/pages**

## 2. Set the source

- Under **"Build and deployment"**
- **Source:** select **"GitHub Actions"**
- Do **not** use "Deploy from a branch"

## 3. Trigger a deploy

- Go to **https://github.com/ianjimin/ianjimin.github.io/actions**
- Click **"Deploy to GitHub Pages"** in the left sidebar
- Click **"Run workflow"** (dropdown) → **"Run workflow"** (green button)
- Wait for the run to complete (green checkmark, ~1–2 min)

## 4. View your site

- Open **https://ianjimin.github.io**
- Wait 1–2 minutes after the workflow completes if it doesn’t load right away

## If it still doesn’t work

1. **Confirm the source:** Settings → Pages → Source must be **"GitHub Actions"**
2. **Check the workflow:** Actions tab → latest run → all steps should be green
3. **Hard refresh:** Try Ctrl+Shift+R (or Cmd+Shift+R on Mac) to bypass cache
