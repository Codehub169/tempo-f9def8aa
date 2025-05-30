/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hueneu-primary': '#A8A39D',       // Muted Stone Neutral (Neu - grounding)
        'hueneu-secondary': '#E0DCD7',    // Soft Warm Grey (Neu - cozy background)
        'hueneu-accent': '#FF6B6B',        // Vibrant Coral Pop (Hue - creative burst, CTAs)
        'hueneu-light-bg': '#F5F5F5',      // Light Background for overall page
        'hueneu-dark-text': '#333333',     // Primary text color for readability
        'hueneu-secondary-text': '#777777',// Secondary text for subtext, captions
        'hueneu-success': '#66BB6A',       // For form success messages
        'hueneu-warning': '#FFA726',       // For form warnings (if any)
        'hueneu-error': '#EF5350',         // For form error messages
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],       // Primary, for body text and UI (modern, elegant, clear)
        display: ['Poppins', 'sans-serif'], // Secondary, for headings and accents (personality, playful/bold)
      },
      animation: {
        'logo-reveal': 'logo-reveal 1.5s ease-out forwards',
        'scroll-indicator-bounce': 'scroll-indicator-bounce 2s infinite ease-in-out',
        'who-knew-pop': 'who-knew-pop 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
      },
      keyframes: {
        'logo-reveal': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-indicator-bounce': {
          '0%, 100%': { transform: 'translateY(-15%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'who-knew-pop': {
          '0%': { opacity: '0', transform: 'scale(0.5) rotate(-15deg)' }, // Added slight rotation for playfulness
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
      }
    },
  },
  plugins: [],
}
