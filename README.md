# AtonNext - Premium Web Development Agency

A cutting-edge, high-performance agency website built with Next.js, Three.js, GSAP, and Framer Motion. Features stunning 3D animations, scroll-driven interactions, and a pristine dark mode design.

![AtonNext](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.160-black?style=for-the-badge&logo=three.js)

## ✨ Features

- **🎨 Premium Dark Mode Design** - Ultra-clean UI with neon violet/electric blue accents
- **🌌 3D Particle Cloud** - WebGL-powered particle system with breathing animation
- **🎬 Advanced Animations** - GSAP, ScrollTrigger, and Framer Motion
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
- **♿ Accessible** - Respects `prefers-reduced-motion` settings
- **⚡ High Performance** - Optimized for 60+ FPS and fast load times
- **🔤 Modern Typography** - Inter font for clean, geometric aesthetics

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 🛠️ Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling

### 3D & Animation
- **[Three.js](https://threejs.org/)** - WebGL 3D graphics
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[GSAP](https://greensock.com/gsap/)** - Professional-grade animation
- **[ScrollTrigger](https://greensock.com/scrolltrigger/)** - Scroll-driven animations
- **[Framer Motion](https://www.framer.com/motion/)** - Declarative animations for React

## 📁 Project Structure

```
AtomNext/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Hero.tsx            # Hero section with 3D canvas
│   ├── WeightlessCanvas.tsx # Three.js scene wrapper
│   ├── ParticleCloud.tsx   # 3D particle system
│   ├── Services.tsx        # Services section
│   ├── ServiceCard.tsx     # Service card with parallax
│   ├── Testimonials.tsx    # Client testimonials
│   ├── TestimonialCard.tsx # Testimonial with in-view animation
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── NavLink.tsx         # Animated nav link
│   ├── Preloader.tsx       # Loading animation
│   └── Footer.tsx          # Footer section
├── hooks/
│   └── useReducedMotion.ts # Accessibility hook
├── lib/
│   └── animations.ts       # Animation configurations
└── package.json
```

## 🎨 Design System

### Colors
```css
Primary Violet: #7F00FF
Electric Blue:  #00F0FF
Dark 900:       #0A0A0A (Background)
Dark 800:       #121212 (Cards)
Dark 700:       #1A1A1A (Borders)
White:          #FFFFFF (Text)
```

### Typography
- **Font:** Inter (via Google Fonts)
- **Weights:** 400, 600, 700

## 🎬 Key Animations

### Hero Section
- **Particle Cloud:** 3000 particles with breathing animation (1000 on mobile)
- **Text Reveal:** GSAP staggered word animation
- **Scroll Shrink:** Hero scales from 1.0 → 0.8 on scroll

### Services
- **Parallax Cards:** Inner content moves opposite to scroll direction
- **Hover Effects:** Glow, scale, and gradient overlays

### Testimonials
- **In-View Animation:** Fade up + scale when 50% visible

### Navigation
- **Glimmer Effect:** Animated underline on hover
- **Scroll Background:** Transparent → solid with backdrop blur

## ♿ Accessibility

- Detects `prefers-reduced-motion` and disables heavy animations
- Three.js scene replaced with static gradient for motion-sensitive users
- Semantic HTML with proper heading hierarchy
- Keyboard navigation support
- High contrast (WCAG AA compliant)

## 📊 Performance

### Optimization Strategies
1. **Code Splitting:** Automatic with Next.js
2. **Lazy Loading:** Suspense boundaries for Three.js
3. **Reduced Particles:** 1000 on mobile vs 3000 on desktop
4. **DPR Limiting:** Max 2x device pixel ratio
5. **Efficient Rendering:** Additive blending, optimized materials

### Target Metrics
- Lighthouse Desktop: ≥ 90
- Lighthouse Mobile: ≥ 80
- Animation FPS: ≥ 60

## 🧪 Testing

```bash
# Development testing
npm run dev

# Production build test
npm run build && npm start

# Access at http://localhost:3000
```

### Manual Testing Checklist
- [ ] Preloader animation completes
- [ ] Hero particle cloud renders and breathes
- [ ] Text stagger animation triggers on load
- [ ] Services cards parallax on scroll
- [ ] Testimonials fade in on scroll
- [ ] Navigation hover effects work
- [ ] Smooth scroll navigation works
- [ ] Responsive on mobile/tablet/desktop
- [ ] Reduced motion preference respected

## 📝 Environment Variables

No environment variables required for basic functionality.

## 🤝 Contributing

This is a showcase project. Feel free to fork and customize!

## 📄 License

MIT License - feel free to use this code for your own projects.

## 🙏 Acknowledgments

- Design inspiration from modern agency websites
- Three.js community for incredible 3D resources
- GSAP for professional animation tools
- Framer Motion for declarative animations

---

**Built with 💜 by AtonNext**

*Building the future, pixel by pixel.*
