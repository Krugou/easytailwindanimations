'use client';

import { useState, ReactNode } from 'react';
import { AnimationProvider, useAnimation } from '@/utils/AnimationContext';
import AnimationSwitcher, { AnimationCategory } from '@/components/AnimationSwitcher';
import AnimationDemo from '@/components/AnimationDemo';
import AnimationPagination from '@/components/AnimationPagination';

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

// GSAP
import GsapBasics from '@/components/animations/gsap/GsapBasics';
import GsapScrollTrigger from '@/components/animations/gsap/GsapScrollTrigger';
import GsapTimeline from '@/components/animations/gsap/GsapTimeline';

// Theatre.js
import TheatreBasics from '@/components/animations/theatrejs/TheatreBasics';

// Anime.js
import AnimeBasics from '@/components/animations/animejs/AnimeBasics';
import AnimeSVG from '@/components/animations/animejs/AnimeSVG';

// Framer Motion
import FramerBasics from '@/components/animations/framermotion/FramerBasics';
import FramerLayout from '@/components/animations/framermotion/FramerLayout';

const ITEMS_PER_PAGE = 4;

const HomeContent = () => {
  const [activeCategory, setActiveCategory] = useState<AnimationCategory>('all');
  const [currentPage, setCurrentPage] = useState(0);
  const { gsapEnabled, theatreEnabled, animeEnabled, framerEnabled } = useAnimation();

  // Define all animations for each category
  const getAnimationsByCategory = () => {
    const animations: { [key in AnimationCategory]?: { title: string; component: ReactNode }[] } = {
      basics: [
        { title: 'Hover Effects', component: <HoverEffects /> },
        { title: 'Button Press Feedback', component: <ButtonPress /> },
        { title: 'Fade Animations', component: <FadeAnimations /> },
        { title: 'Scale & Rotate', component: <ScaleRotate /> },
        { title: 'Slide Animations', component: <SlideAnimations /> },
        { title: 'Micro-Interactions', component: <MicroInteractions /> },
      ],
      text: [
        { title: 'Typewriter Effect', component: <TypewriterEffect /> },
        { title: 'Staggered Reveal', component: <StaggeredReveal /> },
        { title: 'Wave Text', component: <WaveText /> },
        { title: 'Glitch Text', component: <GlitchText /> },
        { title: 'Gradient Text', component: <GradientText /> },
        { title: 'Scramble Text', component: <ScrambleText /> },
      ],
      scroll: [
        { title: 'Fade In On Scroll', component: <FadeInOnScroll /> },
        { title: 'Parallax Sections', component: <ParallaxSections /> },
        { title: 'Scroll Progress', component: <ScrollProgress /> },
        { title: 'Reveal Masks', component: <RevealMasks /> },
      ],
      loaders: [
        { title: 'Spinners', component: <Spinners /> },
        { title: 'Skeleton Loaders', component: <SkeletonLoaders /> },
        { title: 'Progress Bars', component: <ProgressBars /> },
        { title: 'Elastic & Morphing', component: <ElasticMorphing /> },
      ],
      layout: [
        { title: 'Expanding Cards', component: <ExpandingCards /> },
        { title: 'Animated Modals', component: <AnimatedModals /> },
        { title: 'Animated Accordions', component: <AnimatedAccordions /> },
      ],
      wild: [
        { title: 'Magnetic Buttons', component: <MagneticButtons /> },
        { title: 'Cursor Effects', component: <CursorEffects /> },
        { title: 'Physics Animations', component: <PhysicsAnimations /> },
        { title: 'Chaos Mode', component: <ChaosMode /> },
      ],
    };

    // Add library-specific animations based on toggles
    const libraryAnimations: { title: string; component: ReactNode }[] = [];
    
    if (gsapEnabled) {
      libraryAnimations.push(
        { title: 'GSAP Basics', component: <GsapBasics /> },
        { title: 'GSAP ScrollTrigger', component: <GsapScrollTrigger /> },
        { title: 'GSAP Timeline', component: <GsapTimeline /> }
      );
    }
    
    if (theatreEnabled) {
      libraryAnimations.push(
        { title: 'Theatre.js Basics', component: <TheatreBasics /> }
      );
    }
    
    if (animeEnabled) {
      libraryAnimations.push(
        { title: 'Anime.js Basics', component: <AnimeBasics /> },
        { title: 'Anime.js SVG', component: <AnimeSVG /> }
      );
    }
    
    if (framerEnabled) {
      libraryAnimations.push(
        { title: 'Framer Motion Basics', component: <FramerBasics /> },
        { title: 'Framer Motion Layout', component: <FramerLayout /> }
      );
    }

    return { ...animations, libraries: libraryAnimations };
  };

  const renderAnimations = () => {
    const allAnimations = getAnimationsByCategory();
    let animations: { title: string; component: ReactNode }[] = [];

    // Collect animations based on active category
    if (activeCategory === 'all') {
      Object.values(allAnimations).forEach((categoryAnims) => {
        if (Array.isArray(categoryAnims)) {
          animations = [...animations, ...categoryAnims];
        }
      });
    } else if (activeCategory in allAnimations && allAnimations[activeCategory as keyof typeof allAnimations]) {
      animations = allAnimations[activeCategory as keyof typeof allAnimations] || [];
    }

    // Calculate pagination
    const totalPages = Math.ceil(animations.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedAnimations = animations.slice(startIndex, endIndex);

    // Reset to page 0 when category changes
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(0);
    }

    const categoryInfo = {
      basics: { title: '1. Basic Animations', color: 'text-blue-600', desc: 'Fundamental hover effects, transitions, and micro-interactions' },
      text: { title: '2. Text Animations', color: 'text-green-600', desc: 'Dynamic text effects including typewriter, stagger, wave, and glitch' },
      scroll: { title: '3. Scroll-Based Animations', color: 'text-purple-600', desc: 'IntersectionObserver-powered animations triggered by scrolling' },
      loaders: { title: '4. Loaders & Feedback', color: 'text-pink-600', desc: 'Loading indicators, progress bars, and skeleton screens' },
      layout: { title: '5. Layout & Page Transitions', color: 'text-orange-600', desc: 'Expanding cards, animated modals, and accordions' },
      wild: { title: '6. Wild & Experimental', color: 'text-red-600', desc: 'Physics simulations, magnetic effects, and chaos mode!' },
      all: { title: 'All Animations', color: 'text-purple-600', desc: 'Browse all available animations' },
    };

    const info = categoryInfo[activeCategory] || categoryInfo.all;

    return (
      <div>
        <div className="mb-8">
          <h2 className={`text-3xl font-bold mb-2 ${info.color}`}>{info.title}</h2>
          <p className="text-gray-600">{info.desc}</p>
          <p className="text-sm text-gray-500 mt-2">
            Showing {startIndex + 1}-{Math.min(endIndex, animations.length)} of {animations.length} animations
          </p>
        </div>

        <div className="space-y-6">
          {paginatedAnimations.map((anim, index) => (
            <AnimationDemo key={`${activeCategory}-${startIndex + index}`} title={anim.title} defaultOpen={index === 0}>
              {anim.component}
            </AnimationDemo>
          ))}
        </div>

        <AnimationPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    );
  };

  const handleCategoryChange = (category: AnimationCategory) => {
    setActiveCategory(category);
    setCurrentPage(0); // Reset to first page when changing category
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <AnimationSwitcher
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
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
  );
};

const Home = () => (
  <AnimationProvider>
    <HomeContent />
  </AnimationProvider>
);

export default Home;
