# Mechanical Engineering Portfolio

A modern, React-based portfolio website with smooth animations, scroll reveals, and a beautiful teal gradient theme. Inspired by qazuor.com with a stacked project cards layout.

## Features

- ⚛️ **React 18** with Vite for fast development
- 🎨 **Framer Motion** for smooth animations and scroll reveals
- 🌓 **Light/Dark Mode** toggle with theme persistence
- 📱 **Fully Responsive** design
- 🎯 **Stacked Project Cards** with 3D transforms
- ✨ **Scroll Animations** that reveal content as you scroll
- 🎨 **Teal Gradient Theme** (light grey-blue to dark teal)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy to GitHub Pages or any static hosting service.

## Project Structure

```
├── src/
│   ├── components/      # React components
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/         # React context
│   │   └── ThemeContext.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Update Your Information

1. **Personal Info**: Edit `src/components/Hero.jsx` and `src/components/Contact.jsx`
2. **Projects**: Update the projects array in `src/components/Projects.jsx`
3. **Skills**: Modify the skills array in `src/components/Skills.jsx`
4. **About Section**: Edit `src/components/About.jsx`

### Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-mid: #7FD4D8;
  --color-darkest: #0D7377;
  /* ... more colors */
}
```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

2. Enable GitHub Actions in your repository settings

3. Go to Settings → Pages → Source: select "GitHub Actions"

4. The workflow will automatically deploy when you push to main branch

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Go to your repository Settings → Pages

3. Set Source to "Deploy from a branch"

4. Select branch: `gh-pages` and folder: `/ (root)`

5. Push the dist folder:
```bash
npm run build
git checkout --orphan gh-pages
git --work-tree dist add --all
git --work-tree dist commit -m "Deploy"
git push origin HEAD:gh-pages --force
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Styling with CSS variables

## License

Feel free to use this template for your own portfolio!
