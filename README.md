# 🌟 Lucy Gathoni Mugo - Personal Portfolio

> A modern, responsive portfolio website showcasing my journey as a Junior Software Developer

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/lucygathoniportfolio/deploys)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC)](https://tailwindcss.com/)

## 🚀 Live Demo

**[View Live Portfolio →](https://lucygathoniportfolio.netlify.app)**

## 📖 About

This portfolio website represents my passion for software development and showcases my technical skills, projects, and professional journey. As a final-year Software Development student at KCA University, I've created this platform to demonstrate my expertise in modern web technologies and my commitment to creating user-centered digital experiences.

## ✨ Features

### 🎨 **Design & User Experience**
- **Stunning gradient background** with custom CSS animations
- **Fully responsive design** optimized for all devices
- **Modern glassmorphism effects** with backdrop blur
- **Smooth scrolling** and intuitive navigation
- **Professional typography** using Inter font family

### 🛠️ **Technical Features**
- **Server-side rendering** with Next.js 14
- **TypeScript** for type safety and better development experience
- **Component-based architecture** using React 18
- **Optimized performance** with Next.js Image optimization
- **SEO optimized** with comprehensive meta tags and structured data
- **Accessibility compliant** following WCAG guidelines

### 📱 **Content Sections**
- **Hero Section** - Professional introduction with call-to-action
- **About Me** - Personal background and education details
- **Skills & Technologies** - Comprehensive technical skill showcase
- **Featured Projects** - Detailed project presentations with live links
- **Contact Information** - Multiple ways to connect professionally

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### **UI Components**
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern React component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

### **Deployment & Hosting**
- **[Netlify](https://www.netlify.com/)** - Static site hosting with CI/CD
- **[GitHub](https://github.com/)** - Version control and source code management

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Nonniegathoni/lucy-portfolio.git
   cd lucy-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio

### Build for Production

\`\`\`bash
# Create production build
npm run build

# Start production server
npm run start

# Export static files (for Netlify)
npm run export
\`\`\`

## 📁 Project Structure

\`\`\`
lucy-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main portfolio page
├── components/            # Reusable React components
│   └── ui/               # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/                  # Utility functions
│   └── utils.ts          # Tailwind class merging utilities
├── public/               # Static assets
│   ├── lucy-photo.jpg    # Profile photo
│   ├── lucy-avatar.png   # Avatar image
│   └── favicon.ico       # Site favicon
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
\`\`\`

## 🎨 Customization

### **Colors & Theming**
The portfolio uses a custom gradient theme defined in `globals.css`:
\`\`\`css
.portfolio-gradient {
  background: linear-gradient(135deg, #0e1938 0%, #6b41bf 33%, #359dd2 66%, #ffc2c3 100%);
}
\`\`\`

### **Content Updates**
- **Personal Information**: Update in `app/page.tsx`
- **Projects**: Modify the `projects` array in the main component
- **Skills**: Update the `skills` object with your technologies
- **Metadata**: Edit SEO information in `app/layout.tsx`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Size**: Minimized with tree shaking and code splitting

## 🔧 Development Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Export static files
\`\`\`

## 🚀 Deployment

This portfolio is configured for easy deployment on multiple platforms:

### **Netlify (Current)**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy automatically on every push

### **Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the deployment prompts

### **GitHub Pages**
1. Update `next.config.js` for GitHub Pages
2. Use GitHub Actions for automated deployment

## 📈 Features Roadmap

- [ ] **Dark mode toggle** for better accessibility
- [ ] **Blog section** for technical articles
- [ ] **Contact form** with email integration
- [ ] **Project filtering** by technology
- [ ] **Animation improvements** with Framer Motion
- [ ] **Performance analytics** integration

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and feedback:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/improvement`)
3. **Commit your changes** (`git commit -am 'Add new feature'`)
4. **Push to the branch** (`git push origin feature/improvement`)
5. **Create a Pull Request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Lucy Gathoni Mugo**
- **Portfolio**: [lucygathoniportfolio.netlify.app](https://lucygathoniportfolio.netlify.app)

## 🙏 Acknowledgments

- **[Next.js Team](https://nextjs.org/)** for the amazing React framework
- **[Tailwind CSS](https://tailwindcss.com/)** for the utility-first CSS framework
- **[shadcn](https://ui.shadcn.com/)** for the beautiful component library
- **[Lucide](https://lucide.dev/)** for the icon library
- **[Netlify](https://www.netlify.com/)** for seamless deployment and hosting

---

**Built with ❤️ by Lucy Gathoni Mugo**

*Crafting code and creative solutions, one project at a time.*
