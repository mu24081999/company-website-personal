# 🚀 Softin.tech - Modern Software Development Company Website

A stunning, modern website for Softin.tech, a software development company specializing in AI, automation, cloud solutions, and full-stack development.

## ✨ Features

- **🎨 Modern Design**: Futuristic, minimal, and professional aesthetic
- **🌙 Dark/Light Mode**: Toggle between themes with smooth transitions
- **👻 Ghost/Glassmorphism**: Transparent 3D shapes, glowing gradients, and glassmorphic cards
- **🎭 Smooth Animations**: Framer Motion animations for section reveals and hover effects
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance**: Built with Next.js 14 and optimized for speed

## 🏗️ Sections

1. **Hero Section** - Company introduction with 3D floating orbs and glowing grid
2. **About Us** - Company mission, vision, and 3D ghost-style illustration
3. **Services** - AI & Automation, Cloud Integration, Full-Stack Development, Mobile Apps, DevOps
4. **Portfolio** - Showcase of projects with ghost-style 3D cards
5. **Team** - Team members with ghost-style profile cards
6. **Testimonials** - Glassmorphic slider with client feedback
7. **Blog/Insights** - Latest articles with 3D hover animations
8. **Contact** - Contact form and company information
9. **Footer** - Company info, social links, and newsletter signup

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Theme**: next-themes for dark/light mode

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd company_site
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

- Primary colors (blues)
- Secondary colors (purples)
- Ghost colors (transparent whites)
- Dark theme colors

### Animations

Custom animations are defined in `tailwind.config.js`:

- `float` - Floating animation for orbs
- `glow` - Glowing effect for elements
- `slide-up/down` - Slide animations

### Components

All sections are modular components in the `components/` directory:

- Easy to modify content
- Reusable design patterns
- Consistent styling

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Theme System

- **Dark Mode**: Default theme with deep blues and purples
- **Light Mode**: Clean, modern light theme
- **System Preference**: Automatically detects user's system preference
- **Persistent**: Theme choice is saved in localStorage

## 🎭 Animation Features

- **Scroll Animations**: Elements animate in as they come into view
- **Hover Effects**: Interactive hover states with 3D transformations
- **Page Transitions**: Smooth transitions between sections
- **Floating Elements**: Continuous floating animations for background elements

## 📁 Project Structure

```
company_site/
├── app/
│   ├── globals.css          # Global styles and TailwindCSS
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── navbar.tsx           # Navigation component
│   ├── hero-section.tsx     # Hero section
│   ├── about-section.tsx    # About section
│   ├── services-section.tsx # Services section
│   ├── portfolio-section.tsx # Portfolio section
│   ├── team-section.tsx     # Team section
│   ├── testimonials-section.tsx # Testimonials section
│   ├── blog-section.tsx     # Blog section
│   ├── contact-section.tsx  # Contact section
│   └── footer.tsx           # Footer component
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── tailwind.config.js       # TailwindCSS configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎯 Key Features Implementation

### Glassmorphism Design

- `backdrop-blur-md` for glass effects
- `bg-ghost-100/20` for transparent backgrounds
- `border-ghost-200/30` for subtle borders

### 3D Effects

- `transform rotate-3` for 3D rotations
- `hover:rotate-0` for interactive 3D effects
- `perspective` and `rotateY` for depth

### Smooth Animations

- Framer Motion for complex animations
- CSS transitions for hover effects
- Intersection Observer for scroll animations

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Build command: `npm run build`, publish directory: `.next`
- **AWS Amplify**: Connect repository and deploy
- **Custom Server**: Build and serve the `.next` directory

## 🔧 Development

### Adding New Sections

1. Create component in `components/` directory
2. Import and add to `app/page.tsx`
3. Follow existing design patterns

### Modifying Styles

1. Update `tailwind.config.js` for new colors/animations
2. Modify `app/globals.css` for custom CSS
3. Use existing utility classes for consistency

### Adding Animations

1. Use Framer Motion components
2. Follow existing animation patterns
3. Test on different devices for performance

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: Optimized with Next.js
- **Images**: Placeholder system for development
- **Fonts**: Google Fonts with optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:

- Email: hello@softin.tech
- Create an issue in the repository
- Check the documentation

---

**Built with ❤️ by Softin.tech Team**

