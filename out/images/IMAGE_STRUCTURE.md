# Image Folder Structure

This document outlines the image organization for the portfolio website.

## Folder Structure

```
public/images/
├── headshot.jpg (or .jpeg, .png)
├── timeline/
│   ├── northeastern-logo.jpg
│   ├── colby-logo.jpg
│   ├── massa-logo.jpg
│   ├── udha-logo.jpg
│   ├── avinet-logo.jpg
│   ├── soft-tissue-lab-logo.jpg
│   └── qc-project-logo.jpg
├── projects/
│   ├── hydrophone-1.jpg
│   ├── hydrophone-2.jpg
│   ├── hydrophone-3.jpg
│   ├── tr317-sorting-1.jpg
│   ├── tr317-sorting-2.jpg
│   ├── tr317-sorting-3.jpg
│   ├── tr317-sorting-4.jpg
│   ├── cubesat-1.jpg
│   ├── cubesat-2.jpg
│   ├── cubesat-3.jpg
│   ├── pond-simulation-1.jpg
│   ├── pond-simulation-2.jpg
│   ├── pond-simulation-3.jpg
│   ├── pond-simulation-4.jpg
│   ├── pond-simulation-5.jpg
│   ├── rocket-1.jpg
│   ├── rocket-2.jpg
│   ├── rocket-3.jpg
│   ├── tr232-classifier-1.jpg
│   ├── tr232-classifier-2.jpg
│   ├── tr232-classifier-3.jpg
│   ├── tr232-classifier-4.jpg
│   ├── water-wick-1.jpg
│   ├── water-wick-2.jpg
│   ├── water-wick-3.jpg
│   ├── brain-analysis-1.jpg
│   ├── brain-analysis-2.jpg
│   └── brain-analysis-3.jpg
├── island-logo.jpg (or .jpeg, .png)
├── pre-logo.jpg (or .jpeg, .png)
├── motorsport-logo.jpg (or .jpeg, .png)
└── empire-logo.jpg (or .jpeg, .png)
```

## Image Requirements

### Headshot
- **Location**: `public/images/headshot.jpg`
- **Size**: Recommended 400x400px or larger (square)
- **Format**: JPG, JPEG, or PNG
- **Usage**: Hero section profile picture

### Timeline Logos
- **Location**: `public/images/timeline/`
- **Size**: Recommended 200x200px or larger (square preferred)
- **Format**: JPG, JPEG, or PNG
- **Usage**: Company/university logos in timeline section
- **Files Needed**:
  - `northeastern-logo.jpg` - Northeastern University
  - `colby-logo.jpg` - Colby College
  - `massa-logo.jpg` - Massa Products Corporation
  - `udha-logo.jpg` - Uganda Development and Health Associates
  - `avinet-logo.jpg` - Avinet Research Supplies
  - `soft-tissue-lab-logo.jpg` - Soft Tissue Mechanics Lab
  - `qc-project-logo.jpg` - Quality Control Project

### Project Images
- **Location**: `public/images/projects/`
- **Size**: Recommended 1200x800px or larger (landscape)
- **Format**: JPG, JPEG, or PNG
- **Usage**: Project modal galleries
- **Projects**:
  - **Hydrophone Design**: 3 images
  - **TR-317 Sorting System**: 4 images
  - **Cubesat**: 3 images
  - **Pond Simulation**: 5 images
  - **Rocket**: 3 images
  - **TR-232 Classifier**: 4 images
  - **Water Wick Testing**: 3 images
  - **Brain Analysis**: 3 images

### Label Logos
- **Location**: `public/images/`
- **Size**: Recommended 400x200px or larger (landscape)
- **Format**: JPG, JPEG, or PNG
- **Usage**: Activities section background
- **Files**: `island-logo.jpg`, `pre-logo.jpg`, `motorsport-logo.jpg`, `empire-logo.jpg`

## Image Naming Convention

- Use lowercase letters
- Use hyphens (-) to separate words
- Include project/company identifier
- Number sequential images (e.g., `-1`, `-2`, `-3`)
- Use consistent file extensions (.jpg, .jpeg, or .png)

## Fallback Behavior

If an image is not found, the component will:
- Try alternative file extensions (.jpg → .jpeg → .png)
- Hide the image container if all attempts fail
- Display gracefully without breaking the layout

## Tips

1. **Optimize images**: Compress images before uploading to reduce load times
2. **Consistent sizing**: Keep similar images the same dimensions for better visual consistency
3. **Alt text**: Images automatically use descriptive alt text based on context
4. **File size**: Aim for images under 500KB each for optimal performance
