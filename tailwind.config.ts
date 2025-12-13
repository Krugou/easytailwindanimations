import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Basic animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
        // Text animations
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // Loaders
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        elastic: {
          '0%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(1.1, 0.9)' },
          '50%': { transform: 'scale(0.9, 1.1)' },
          '75%': { transform: 'scale(1.05, 0.95)' },
          '100%': { transform: 'scale(1, 1)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '50%' },
          '50%': { borderRadius: '0%' },
        },
        // Wild animations
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(-15deg)' },
          '30%': { transform: 'rotate(10deg)' },
          '45%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
        noise: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-1px, 1px)' },
          '20%': { transform: 'translate(1px, -1px)' },
          '30%': { transform: 'translate(-1px, -1px)' },
          '40%': { transform: 'translate(1px, 1px)' },
          '50%': { transform: 'translate(-1px, 1px)' },
          '60%': { transform: 'translate(1px, -1px)' },
          '70%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 1px)' },
          '90%': { transform: 'translate(-1px, 1px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
        slideInUp: 'slideInUp 0.5s ease-out',
        slideInDown: 'slideInDown 0.5s ease-out',
        scaleUp: 'scaleUp 0.3s ease-out',
        bounce: 'bounce 1s infinite',
        typewriter: 'typewriter 2s steps(40) forwards',
        wave: 'wave 0.5s ease-in-out',
        glitch: 'glitch 0.5s infinite',
        gradientShift: 'gradientShift 3s ease infinite',
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        elastic: 'elastic 1s ease-in-out infinite',
        morph: 'morph 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out',
        wobble: 'wobble 1s ease-in-out',
        noise: 'noise 0.1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
