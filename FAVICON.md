# Favicon Setup

To add a favicon (tab icon) to your portfolio:

## File Requirements

Place these files in the `public/` folder (root level):

1. **favicon.png** (or **favicon.ico**)
   - Recommended size: 32x32px or 64x64px
   - Formats: PNG, ICO, or SVG
   - This is the main favicon that appears in browser tabs

2. **apple-touch-icon.png** (optional)
   - Recommended size: 180x180px
   - Used when users add your site to their iOS home screen

## File Names

The HTML is configured to look for:
- `/favicon.png` (primary)
- `/favicon.ico` (fallback)
- `/apple-touch-icon.png` (iOS)

## Creating a Favicon

You can:
1. Use your headshot or a logo
2. Create a simple icon with your initials (IK)
3. Use an online favicon generator like:
   - https://favicon.io/
   - https://realfavicongenerator.net/

## Quick Setup

1. Create or find your favicon image
2. Save it as `favicon.png` in the `public/` folder
3. The favicon will automatically appear in browser tabs

The favicon links are already added to `index.html`, so you just need to add the image files!
