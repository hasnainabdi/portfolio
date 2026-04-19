# Assets Folder

This folder contains all media and document files for the portfolio website.

## Folder Structure

```
assets/
├── images/          # All image files
│   ├── profile.jpg     # Profile picture for About section
│   ├── cert1.jpg      # Certification 1 - Full Stack React
│   ├── cert2.jpg      # Certification 2 - AI Digital Advertising
│   ├── cert3.jpg      # Certification 3 - AI Marketer
│   ├── cert4.jpg      # Certification 4 - Generative AI
│   └── favicon.ico    # Website favicon
└── documents/        # PDF and document files
    └── resume.pdf      # Resume/CV for download
```

## Usage

### Images
- Place all images in the `images/` folder
- Update HTML references to use `assets/images/` path
- Recommended formats: JPG, PNG, ICO
- Optimize images for web (compress for faster loading)

### Documents
- Place PDF files in the `documents/` folder
- Update JavaScript references to use `assets/documents/` path
- Recommended formats: PDF for documents

### File Naming
- Use descriptive names (lowercase, no spaces)
- Use hyphens for multi-word names
- Keep names short but descriptive

### Image Specifications
- **Profile Picture**: Square format, 400x400px recommended
- **Certifications**: 16:9 aspect ratio, 400x225px minimum
- **Favicon**: 32x32px or 64x64px, ICO format

### Document Specifications
- **Resume**: PDF format, optimized for web
- **File Size**: Keep under 2MB for faster downloads

## Adding New Files

1. **Images**: Copy to `assets/images/` folder
2. **Documents**: Copy to `assets/documents/` folder
3. **Update References**: Modify HTML/JS paths accordingly
4. **Test**: Verify all links work correctly

## Best Practices

- **Compression**: Optimize images for web
- **Naming**: Use consistent naming convention
- **Backup**: Keep original files separate
- **Organization**: Group similar files together
- **Testing**: Test all file paths after changes
