# Easy Tailwind Animations 🎨

A comprehensive animation playground and showcase built with Next.js (App Router) and Tailwind CSS. This project demonstrates a wide variety of animations organized into categories, with controls for speed, enabling/disabling animations, and full support for `prefers-reduced-motion`.

## 🚀 Live Demo

Visit the live demo: [https://krugou.github.io/easytailwindanimations/](https://krugou.github.io/easytailwindanimations/)

## ✨ Features

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

### Global Controls

- **Animation Speed**: Adjust all animations to 0.5x, 1x, or 2x speed
- **Animation Toggle**: Globally enable/disable all animations
- **Accessibility**: Full support for `prefers-reduced-motion`
- **Category Switcher**: Filter animations by category or view all

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animation Techniques**:
  - CSS animations and transitions
  - Tailwind keyframes
  - requestAnimationFrame for physics
  - IntersectionObserver for scroll effects
  - React state management

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
│       └── wild/           # Experimental animations
├── utils/
│   └── AnimationContext.tsx  # Global animation state
├── tailwind.config.ts      # Tailwind with custom keyframes
├── next.config.js          # Next.js config for GitHub Pages
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

This project is configured for GitHub Pages deployment with static export.

#### Automatic Deployment

Push to the `main` branch, and GitHub Actions will automatically build and deploy to GitHub Pages.

#### Manual Deployment

```bash
# Build for production
npm run build

# The static files will be in the 'out' directory
# Deploy the 'out' directory to your hosting provider
```

### Configuration

The `next.config.js` is set up for GitHub Pages:

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
};
```

**Important**: Update `repoName` to match your repository name!

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (not for static export)
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Animation Speed Control

Uses CSS custom properties to control animation duration globally:

```css
:root {
  --animation-speed: 1;
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

Uses IntersectionObserver for performance-friendly scroll detection:

```tsx
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger animation
      }
    });
  },
  { threshold: 0.1 }
);
```

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
