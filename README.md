# David H. Liu Portfolio

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS. Features a Coinbase-inspired design with dark mode support, smooth animations, and a professional layout showcasing software engineering expertise.

## 🚀 Features

- **Modern Design**: Clean, professional Coinbase-inspired aesthetic
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design for all devices
- **Animations**: Smooth animations using Framer Motion
- **Interactive Projects**: Project showcase with modal details
- **Contact Form**: Modern contact form with validation
- **Performance**: Optimized for speed and SEO
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vibecode-portfolio.git
cd vibecode-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
npm run export
```

2. The `out` folder will contain the static files ready for deployment.

3. Push the `out` folder contents to your GitHub Pages repository.

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your site
3. Your site will be available at `https://your-project.vercel.app`

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`. The primary colors are based on Coinbase's blue palette:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Main Coinbase blue
    // ... other shades
  }
}
```

### Content
Update the following files to customize your content:

- `components/HeroSection.tsx` - Hero section content
- `components/AboutSection.tsx` - About section and experience
- `components/ProjectsSection.tsx` - Projects showcase
- `components/ContactSection.tsx` - Contact information

### Images
Replace placeholder images in the projects section with your actual project screenshots.

## 📱 Sections

1. **Hero Section**: Dynamic heading with animated text and call-to-action buttons
2. **About Section**: Professional background, skills, and experience timeline
3. **Projects Section**: Interactive project grid with detailed modals
4. **Contact Section**: Contact form and social links

## 🎯 Performance

- Optimized images and assets
- Lazy loading for better performance
- SEO-friendly structure
- Fast loading times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/vibecode-portfolio/issues).

## 📞 Contact

- Email: liu00david@gmail.com
- LinkedIn: [David H. Liu](https://linkedin.com)
- GitHub: [David H. Liu](https://github.com)
- Instagram: [@finding.david](https://instagram.com/finding.david)

---

Made with ❤️ by David H. Liu