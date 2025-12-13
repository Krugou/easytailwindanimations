# Easy Tailwind Animations 🎨

A comprehensive animation playground and showcase built with Next.js (App Router) and Tailwind CSS. This project demonstrates a wide variety of animations organized into categories, with advanced controls including chaos mode, animation presets, GSAP integration, and full support for `prefers-reduced-motion`.

## 🚀 Live Demo

Visit the live demo: [https://krugou.github.io/easytailwindanimations/](https://krugou.github.io/easytailwindanimations/)

## ✨ Features

### New Features 🎉

- **🎲 Chaos Slider**: Add randomness to animations (0-100%) for dynamic, unpredictable effects
- **🎭 Animation Presets**: Quick preset modes:
  - 😌 **Calm**: Slow, smooth animations with minimal chaos
  - ⚡ **Energetic**: Normal speed with moderate chaos
  - 🔥 **Feral**: Fast, intense animations with high chaos
- **🎬 Unified Animation Engine**: Single hook (`useAnimationEngine`) for consistent animation behavior
- **💚 GSAP Integration**: Optional GreenSock Animation Platform (GSAP) examples
  - Toggle GSAP on/off from the control panel
  - Includes GSAP basics, ScrollTrigger, and Timeline examples
- **🔄 Animation Reset**: Scroll-based animations can reset when leaving viewport
- **📦 Optimized for GitHub Pages**: Properly configured for Next.js static export

### Animation Categories

1. **Basics** - Fundamental animations
   - Hover effects (scale, shadow, border, glow, translate)
   - Button press feedback
   - Fade in/out animations
   - Scale and rotate transforms
   - Slide animations from all directions
   - Micro-interactions (like button, bookmark, ripple effects)

2. **Text Animations** - Dynamic text effects
   - Typewriter effect
   - Staggered letter reveal
   - Wave text animation
   - Glitch and shake effects
   - Animated gradient text
   - Scramble-on-hover text

3. **Scroll-Based Animations** - Triggered by scrolling
   - Fade in on scroll (IntersectionObserver)
   - Parallax scrolling sections
   - Scroll progress indicators (bar, circular, growing bars)
   - Reveal mask animations

4. **Loaders & Feedback** - Loading states
   - Various spinner designs
   - Skeleton loaders
   - Progress bars with different styles
   - Elastic and morphing shape animations

5. **Layout & Page Transitions**
   - Expanding cards
   - Animated modals (scale, slide, fade)
   - Animated accordions

6. **Wild & Experimental** - Creative experiments
   - Magnetic buttons that follow cursor
   - Cursor-reactive backgrounds
   - Physics-based bouncing balls (requestAnimationFrame)
   - Chaos mode
   - Screen shake effect
   - "Hover too hard" easter egg
   - Glitch effects with multiple layers
   - Noise overlay animations

7. **GSAP Examples** (when GSAP is enabled)
   - GSAP basics (fade, scale, rotate, bounce)
   - ScrollTrigger animations
   - Timeline orchestration
   - Stagger animations

### Global Controls

- **Animation Speed**: Adjust all animations to 0.5x, 1x, or 2x speed
- **Animation Toggle**: Globally enable/disable all animations
- **Chaos Slider**: Add 0-100% randomness to animations
- **Animation Presets**: Quick modes (Calm, Energetic, Feral)
- **GSAP Toggle**: Show/hide GSAP-powered examples
- **Accessibility**: Full support for `prefers-reduced-motion`
- **Category Switcher**: Filter animations by category or view all

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS 4+
- **Language**: TypeScript
- **Animation Libraries**:
  - GSAP 3.12+ (optional, for advanced animations)
  - ScrollTrigger plugin
- **Animation Techniques**:
  - CSS animations and transitions
  - Tailwind keyframes
  - GSAP for advanced timeline animations
  - requestAnimationFrame for physics
  - IntersectionObserver for scroll effects
  - React state management
  - Unified animation engine hook

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Krugou/easytailwindanimations.git
cd easytailwindanimations

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🏗️ Project Structure

```
easytailwindanimations/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with all animations
│   └── globals.css         # Global styles & animation utilities
├── components/
│   ├── AnimationSwitcher.tsx  # Category switcher & controls
│   └── animations/
│       ├── basics/         # Basic animations
│       ├── text/           # Text animations
│       ├── scroll/         # Scroll-based animations
│       ├── loaders/        # Loaders & feedback
│       ├── layout/         # Layout transitions
│       ├── wild/           # Experimental animations
│       └── gsap/           # GSAP examples (optional)
├── utils/
│   ├── AnimationContext.tsx    # Global animation state
│   └── useAnimationEngine.ts   # Unified animation engine hook
├── tailwind.config.ts      # Tailwind with custom keyframes
├── next.config.mjs         # Next.js config for GitHub Pages
├── deploy.sh               # Deployment script
└── package.json
```

## 🎨 Adding New Animations

1. **Create a new component** in the appropriate category folder:
   ```tsx
   // components/animations/basics/NewAnimation.tsx
   'use client';
   
   export default function NewAnimation() {
     return (
       <div className="space-y-8">
         <div>
           <h3 className="text-xl font-semibold mb-4">Your Animation</h3>
           {/* Your animation code */}
         </div>
       </div>
     );
   }
   ```

2. **Import and add** to `app/page.tsx`:
   ```tsx
   import NewAnimation from '@/components/animations/basics/NewAnimation';
   
   // Add to the appropriate section
   <div className="bg-white rounded-xl p-8 shadow-lg">
     <h3 className="text-2xl font-semibold mb-6">New Animation</h3>
     <NewAnimation />
   </div>
   ```

3. **Add custom keyframes** to `tailwind.config.ts` if needed:
   ```typescript
   keyframes: {
     myAnimation: {
       '0%': { /* start state */ },
       '100%': { /* end state */ },
     },
   },
   animation: {
     myAnimation: 'myAnimation 1s ease-in-out',
   },
   ```

## 🚀 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment with static export and properly handles Next.js basePath for production.

#### Automatic Deployment

Push to the `main` branch, and GitHub Actions will automatically build and deploy to GitHub Pages.

#### Manual Deployment

Use the provided deployment script:

```bash
# Make the script executable (first time only)
chmod +x deploy.sh

# Run the deployment preparation
./deploy.sh
```

Or manually:

```bash
# Build for production
npm run build

# The static files will be in the 'out' directory
# Deploy the 'out' directory to your hosting provider
```

### Configuration

The `next.config.mjs` is optimized for GitHub Pages:

```javascript
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'easytailwindanimations';

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

**Important**: Update `repoName` to match your repository name!

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server (not for static export)
- `npm run lint` - Run ESLint
- `./deploy.sh` - Full deployment preparation script

## 🎯 Key Features Explained

### Unified Animation Engine

The `useAnimationEngine` hook provides a consistent way to handle animations:

```tsx
import { useAnimationEngine } from '@/utils/useAnimationEngine';

const MyComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { 
    chaos, 
    preset, 
    getChaosAdjustedDuration,
    getPresetConfig 
  } = useAnimationEngine(elementRef);
  
  // Your animation logic here
};
```

### Chaos Slider

Adds randomness to animations:
- **0%**: No chaos, animations run as designed
- **50%**: Moderate variation in timing and intensity
- **100%**: Maximum randomness for wild, unpredictable effects

### Animation Presets

Quick configuration modes:
- **Calm (😌)**: Slow animations (0.5x speed), no chaos
- **Energetic (⚡)**: Normal speed, 30% chaos
- **Feral (🔥)**: Fast animations (2x speed), 80% chaos

### Animation Speed Control

Uses CSS custom properties to control animation duration globally:

```css
:root {
  --animation-speed: 1;
  --chaos-level: 0;
}

* {
  animation-duration: calc(var(--animation-duration, 1s) / var(--animation-speed));
}
```

### Prefers Reduced Motion

Automatically respects user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Scroll Animations

Uses IntersectionObserver for performance-friendly scroll detection with optional reset:

```tsx
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger animation
      } else if (resetMode) {
        // Reset animation when element leaves viewport
      }
    });
  },
  { threshold: 0.1 }
);
```

### GSAP Integration

When GSAP is enabled, additional examples demonstrate:
- Basic GSAP animations
- ScrollTrigger for scroll-based effects
- Timeline orchestration for complex sequences
- Stagger animations for grouped elements

All GSAP examples integrate with the chaos slider and presets for consistent behavior.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-animation`)
3. Commit your changes (`git commit -m 'Add amazing animation'`)
4. Push to the branch (`git push origin feature/amazing-animation`)
5. Open a Pull Request

## 📄 License

ISC License

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by various animation libraries and creative developers

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Note**: This is an educational project showcasing animation techniques. Feel free to use these animations in your own projects!
