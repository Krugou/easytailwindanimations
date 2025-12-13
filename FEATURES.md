# New Features Guide 🎉

This document provides a comprehensive guide to the new features added to Easy Tailwind Animations.

## 🎲 Chaos Slider

The Chaos Slider adds randomness and unpredictability to your animations, creating dynamic and unique visual effects every time.

### How it Works
- **Range**: 0-100%
- **0% (No Chaos)**: Animations run exactly as designed with consistent timing and behavior
- **50% (Moderate Chaos)**: Adds moderate variation to animation timing, delays, and intensity
- **100% (Maximum Chaos)**: Maximum randomness creates wild, unpredictable animation effects

### Use Cases
- **Creative Exploration**: Discover unexpected animation combinations
- **Dynamic Backgrounds**: Create ever-changing background animations
- **Artistic Effects**: Add organic, natural-feeling movement to elements
- **Presentation Mode**: Impress audiences with unique animations every time

### Technical Details
The chaos slider affects:
- Animation durations (±50% variation at max chaos)
- Animation delays (random variations)
- Animation intensity (scale, rotation, translation amounts)

## 🎭 Animation Presets

Quick configuration modes that instantly transform the entire animation experience.

### Calm Mode 😌
Perfect for professional sites, accessibility-focused designs, and calming user experiences.

**Configuration:**
- Speed: 0.5x (slow)
- Chaos: 0% (none)
- Duration: 1.5s base
- Easing: ease-in-out
- Intensity: 0.5x

**Best For:**
- Corporate websites
- Reading-focused applications
- Accessibility-first designs
- Meditation or wellness apps

### Energetic Mode ⚡
Balanced settings for modern, dynamic websites with personality.

**Configuration:**
- Speed: 1x (normal)
- Chaos: 30% (moderate)
- Duration: 0.8s base
- Easing: ease-out
- Intensity: 1x

**Best For:**
- E-commerce sites
- Marketing pages
- Social media platforms
- Modern web apps

### Feral Mode 🔥
Maximum energy for impactful, attention-grabbing experiences.

**Configuration:**
- Speed: 2x (fast)
- Chaos: 80% (high)
- Duration: 0.3s base
- Easing: cubic-bezier with bounce
- Intensity: 1.5x

**Best For:**
- Gaming websites
- Event promotions
- Creative portfolios
- Experimental designs

## 🎬 Unified Animation Engine

The `useAnimationEngine` hook provides a consistent way to create animations across the entire application.

### Benefits
1. **Consistency**: All animations respect global settings (speed, chaos, presets)
2. **Performance**: Built-in IntersectionObserver for efficient scroll animations
3. **Flexibility**: Easy to customize per-component while maintaining global coherence
4. **Accessibility**: Automatically respects user preferences for reduced motion

### Usage Example

```tsx
import { useRef } from 'react';
import { useAnimationEngine } from '@/utils/useAnimationEngine';

const MyComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  const { 
    chaos,
    preset,
    getChaosAdjustedDuration,
    getChaosAdjustedDelay,
    getRandomIntensity,
    getPresetConfig
  } = useAnimationEngine(
    elementRef,
    () => console.log('Element visible!'),
    () => console.log('Element hidden!'),
    { 
      threshold: 0.1,
      resetOnExit: true 
    }
  );

  const config = getPresetConfig();
  const duration = getChaosAdjustedDuration(1); // Base 1s, adjusted for chaos
  const delay = getChaosAdjustedDelay(0.5); // Base 0.5s, adjusted for chaos
  const scale = getRandomIntensity(1, 1.5); // Random between 1 and 1.5 based on chaos

  // Your animation logic here
};
```

### API Reference

#### `useAnimationEngine(elementRef, onVisible, onHidden, options)`

**Parameters:**
- `elementRef` (optional): React ref to the element to observe
- `onVisible` (optional): Callback when element enters viewport
- `onHidden` (optional): Callback when element exits viewport
- `options` (optional): Configuration object
  - `threshold`: IntersectionObserver threshold (default: 0.1)
  - `rootMargin`: IntersectionObserver root margin (default: '0px')
  - `triggerOnce`: Only trigger once (default: false)
  - `resetOnExit`: Reset animation on exit (default: false)

**Returns:**
- `chaos`: Current chaos level (0-100)
- `preset`: Current preset ('calm', 'energetic', or 'feral')
- `enabled`: Whether animations are globally enabled
- `getChaosAdjustedDuration(baseDuration)`: Get duration adjusted for chaos
- `getChaosAdjustedDelay(baseDelay)`: Get delay adjusted for chaos
- `getRandomIntensity(base, max)`: Get random intensity based on chaos
- `getPresetConfig()`: Get current preset configuration

## 💚 GSAP Integration

Optional GreenSock Animation Platform (GSAP) integration for advanced timeline-based animations.

### Features
- **Toggle On/Off**: Enable GSAP examples from the control panel
- **Professional Animations**: Industry-standard animation library
- **Timeline Control**: Orchestrate complex animation sequences
- **ScrollTrigger**: Advanced scroll-based animation triggers

### Included Examples

#### 1. GSAP Basics
Demonstrates fundamental GSAP animations:
- Fade and slide transitions
- Scale animations
- Rotation effects
- Bounce animations

#### 2. GSAP ScrollTrigger
Advanced scroll-based animations:
- Scroll-triggered fade-in
- Scale on scroll
- Rotation on scroll
- Parallax effects

#### 3. GSAP Timeline
Complex animation orchestration:
- Sequential animations
- Timeline playback controls (play, reverse, reset)
- Staggered group animations
- Synchronized multi-element animations

### Integration with Animation Engine
All GSAP examples integrate with the chaos slider and presets:
- Animation durations adjust based on preset settings
- Chaos affects timing variations
- Respects global animation enable/disable toggle

## 🔄 Animation Reset Mode

Scroll-based animations can now reset when elements leave the viewport.

### Features
- **Toggle Reset Mode**: Turn on/off per component
- **Smooth Reset**: Animations smoothly reset to initial state
- **Re-trigger**: Animations play again when scrolling back

### Use Cases
- Long pages with repeated elements
- Tutorial or onboarding sequences
- Product showcases that need to re-animate
- Content that users might scroll past quickly

### Implementation
```tsx
const [resetMode, setResetMode] = useState(false);

// Toggle button
<button onClick={() => setResetMode(!resetMode)}>
  Reset Mode: {resetMode ? 'ON' : 'OFF'}
</button>

// Use in animation logic
useEffect(() => {
  // ... IntersectionObserver setup
  if (entry.isIntersecting) {
    // Play animation
  } else if (resetMode) {
    // Reset animation
  }
}, [resetMode]);
```

## 🚀 Deployment

### Deploy Script
A new `deploy.sh` script automates the deployment process:

```bash
# Run the deploy script
npm run deploy
# or
./deploy.sh
```

**What it does:**
1. Cleans previous build artifacts
2. Installs/updates dependencies
3. Runs linting
4. Builds for production
5. Verifies build output
6. Provides next steps guidance

### GitHub Pages Optimization
The project is fully optimized for GitHub Pages:
- Static export configuration
- Proper basePath handling
- Asset prefix for production
- Trailing slash for routing
- Unoptimized images for static export

### Automatic Deployment
GitHub Actions automatically deploys on push to `main`:
- Triggered on every push to main branch
- Builds with production environment
- Deploys to GitHub Pages
- Available at: `https://[username].github.io/[repo-name]/`

## 🎨 Best Practices

### Choosing the Right Preset
- **Start with Calm**: Begin with calm mode, then increase energy as needed
- **Match Your Brand**: Professional = Calm, Dynamic = Energetic, Creative = Feral
- **Consider Audience**: Accessibility-focused? Use Calm. Youth-focused? Try Energetic/Feral

### Using Chaos Effectively
- **Subtle is Better**: 20-40% chaos often looks more professional than 100%
- **Test in Context**: What looks good in isolation may not work in full page context
- **Combine with Presets**: Presets + slight chaos adjustments = perfect balance

### Performance Tips
1. **Use IntersectionObserver**: Always animate based on visibility
2. **Enable Reset Sparingly**: Reset mode uses more resources
3. **Test on Mobile**: Ensure animations don't hinder mobile experience
4. **Respect User Preferences**: The system automatically respects `prefers-reduced-motion`

### Development Workflow
1. **Build Core Design**: Create your design without animations first
2. **Add Calm Animations**: Start with calm mode to ensure accessibility
3. **Experiment**: Try other presets and chaos levels
4. **Fine-tune**: Adjust individual animations as needed
5. **Test**: Verify on multiple devices and browsers
6. **Deploy**: Use the deploy script for production builds

## 🔧 Customization

### Creating Custom Presets
You can extend the preset system by modifying `utils/presetConfig.ts`:

```typescript
export const presetConfigs: Record<AnimationPreset, PresetConfig> = {
  // ... existing presets
  custom: {
    speed: 'normal',
    chaos: 15,
    duration: 1.2,
    easing: 'ease-in-out',
    intensity: 0.8,
  },
};
```

### Custom Animation Components
All new animations should use the unified engine:

```tsx
import { useAnimationEngine } from '@/utils/useAnimationEngine';

const MyAnimation = () => {
  const ref = useRef(null);
  const { getPresetConfig, getChaosAdjustedDuration } = useAnimationEngine(ref);
  
  // Use preset config and chaos adjustments
  const config = getPresetConfig();
  const duration = getChaosAdjustedDuration(config.duration);
  
  // Your animation implementation
};
```

## 📚 Additional Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Animation Performance](https://web.dev/animations/)

## 🤝 Contributing

Want to add more features or presets? See the main README for contribution guidelines!

---

**Questions or Issues?** Open an issue on GitHub!
