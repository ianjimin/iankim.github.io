# Deploying to GitHub Pages

## Pages setup (required)

1. Go to **https://github.com/ianjimin/ianjimin.github.io** → **Settings** → **Pages**
2. Under **Source**, select **"Deploy from a branch"**
3. Under **Branch**, select **gh-pages** and **/ (root)**
4. Click **Save**

Your site will be at **https://ianjimin.github.io**

## How it works

- Pushing to `main` triggers the deploy workflow
- The workflow builds the site and pushes the output to the `gh-pages` branch
- GitHub Pages serves the site from that branch

## Manual deploy

Go to **Actions** → **Deploy to GitHub Pages** → **Run workflow**

## Troubleshooting

- **Nothing shows**: Ensure Pages source is "Deploy from a branch" with `gh-pages` selected
- **404**: Wait 1–2 minutes after the workflow completes
- **Check status**: Actions tab → latest run → verify all steps passed
