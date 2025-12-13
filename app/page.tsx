'use client';

import { useState } from 'react';
import { AnimationProvider } from '@/utils/AnimationContext';
import AnimationSwitcher, { AnimationCategory } from '@/components/AnimationSwitcher';

// Basics
import HoverEffects from '@/components/animations/basics/HoverEffects';
import ButtonPress from '@/components/animations/basics/ButtonPress';
import FadeAnimations from '@/components/animations/basics/FadeAnimations';
import ScaleRotate from '@/components/animations/basics/ScaleRotate';
import SlideAnimations from '@/components/animations/basics/SlideAnimations';
import MicroInteractions from '@/components/animations/basics/MicroInteractions';

// Text
import TypewriterEffect from '@/components/animations/text/TypewriterEffect';
import StaggeredReveal from '@/components/animations/text/StaggeredReveal';
import WaveText from '@/components/animations/text/WaveText';
import GlitchText from '@/components/animations/text/GlitchText';
import GradientText from '@/components/animations/text/GradientText';
import ScrambleText from '@/components/animations/text/ScrambleText';

// Scroll
import FadeInOnScroll from '@/components/animations/scroll/FadeInOnScroll';
import ParallaxSections from '@/components/animations/scroll/ParallaxSections';
import ScrollProgress from '@/components/animations/scroll/ScrollProgress';
import RevealMasks from '@/components/animations/scroll/RevealMasks';

// Loaders
import Spinners from '@/components/animations/loaders/Spinners';
import SkeletonLoaders from '@/components/animations/loaders/SkeletonLoaders';
import ProgressBars from '@/components/animations/loaders/ProgressBars';
import ElasticMorphing from '@/components/animations/loaders/ElasticMorphing';

// Layout
import ExpandingCards from '@/components/animations/layout/ExpandingCards';
import AnimatedModals from '@/components/animations/layout/AnimatedModals';
import AnimatedAccordions from '@/components/animations/layout/AnimatedAccordions';

// Wild
import MagneticButtons from '@/components/animations/wild/MagneticButtons';
import CursorEffects from '@/components/animations/wild/CursorEffects';
import PhysicsAnimations from '@/components/animations/wild/PhysicsAnimations';
import ChaosMode from '@/components/animations/wild/ChaosMode';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<AnimationCategory>('all');

  const renderAnimations = () => {
    const sections = [];

    if (activeCategory === 'all' || activeCategory === 'basics') {
      sections.push(
        <section key="basics" className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-blue-600">1. Basic Animations</h2>
            <p className="text-gray-600 mb-8">Fundamental hover effects, transitions, and micro-interactions</p>
            
            <div className="space-y-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Hover Effects</h3>
                <HoverEffects />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Button Press Feedback</h3>
                <ButtonPress />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Fade Animations</h3>
                <FadeAnimations />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Scale & Rotate</h3>
                <ScaleRotate />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Slide Animations</h3>
                <SlideAnimations />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Micro-Interactions</h3>
                <MicroInteractions />
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (activeCategory === 'all' || activeCategory === 'text') {
      sections.push(
        <section key="text" className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-green-600">2. Text Animations</h2>
            <p className="text-gray-600 mb-8">Dynamic text effects including typewriter, stagger, wave, and glitch</p>
            
            <div className="space-y-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Typewriter Effect</h3>
                <TypewriterEffect />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Staggered Reveal</h3>
                <StaggeredReveal />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Wave Text</h3>
                <WaveText />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Glitch Text</h3>
                <GlitchText />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Gradient Text</h3>
                <GradientText />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Scramble Text</h3>
                <ScrambleText />
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (activeCategory === 'all' || activeCategory === 'scroll') {
      sections.push(
        <section key="scroll" className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-purple-600">3. Scroll-Based Animations</h2>
            <p className="text-gray-600 mb-8">IntersectionObserver-powered animations triggered by scrolling</p>
            
            <div className="space-y-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Fade In On Scroll</h3>
                <FadeInOnScroll />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Parallax Sections</h3>
                <ParallaxSections />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Scroll Progress</h3>
                <ScrollProgress />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Reveal Masks</h3>
                <RevealMasks />
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (activeCategory === 'all' || activeCategory === 'loaders') {
      sections.push(
        <section key="loaders" className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-pink-600">4. Loaders & Feedback</h2>
            <p className="text-gray-600 mb-8">Loading indicators, progress bars, and skeleton screens</p>
            
            <div className="space-y-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Spinners</h3>
                <Spinners />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Skeleton Loaders</h3>
                <SkeletonLoaders />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Progress Bars</h3>
                <ProgressBars />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Elastic & Morphing</h3>
                <ElasticMorphing />
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (activeCategory === 'all' || activeCategory === 'layout') {
      sections.push(
        <section key="layout" className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-orange-600">5. Layout & Page Transitions</h2>
            <p className="text-gray-600 mb-8">Expanding cards, animated modals, and accordions</p>
            
            <div className="space-y-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Expanding Cards</h3>
                <ExpandingCards />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Animated Modals</h3>
                <AnimatedModals />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Animated Accordions</h3>
                <AnimatedAccordions />
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (activeCategory === 'all' || activeCategory === 'wild') {
      sections.push(
        <section key="wild" className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-red-600">6. Wild & Experimental</h2>
            <p className="text-gray-600 mb-8">Physics simulations, magnetic effects, and chaos mode!</p>
            
            <div className="space-y-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Magnetic Buttons</h3>
                <MagneticButtons />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Cursor Effects</h3>
                <CursorEffects />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Physics Animations</h3>
                <PhysicsAnimations />
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Chaos Mode</h3>
                <ChaosMode />
              </div>
            </div>
          </div>
        </section>
      );
    }

    return sections;
  };

  return (
    <AnimationProvider>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <AnimationSwitcher
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <header className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Easy Tailwind Animations
            </h1>
            <p className="text-xl text-gray-600">
              A complete animation playground built with Next.js & Tailwind CSS
            </p>
          </header>

          <div className="space-y-24">
            {renderAnimations()}
          </div>

          <footer className="mt-24 text-center text-gray-600 py-8 border-t border-gray-200">
            <p>Built with Next.js, Tailwind CSS, and lots of animations! 🎨</p>
          </footer>
        </div>
      </main>
    </AnimationProvider>
  );
};

export default Home;
