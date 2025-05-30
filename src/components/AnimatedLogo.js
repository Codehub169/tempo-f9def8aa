// AnimatedLogo component for hueneu
// Path: src/components/AnimatedLogo.js
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  // Animation variants for the 'hue' part of the logo
  const hueVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2 },
    },
  };

  // Animation variants for the 'neu' part of the logo
  const neuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.5 }, // Slightly delayed for a sequential effect
    },
  };

  return (
    // Container for the logo, ensuring text alignment and styling
    // The text size is responsive: large on medium screens and up, smaller on mobile
    // Leading-tight and tracking-tight for a compact, modern look
    <div className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tighter select-none">
      {/* 'hue' part of the logo, styled with the accent color and animated */}
      <motion.span
        variants={hueVariants}
        initial="hidden"
        animate="visible"
        className="text-hueneu-accent"
      >
        hue
      </motion.span>
      {/* 'neu' part of the logo, styled with the primary neutral color and animated */}
      <motion.span
        variants={neuVariants}
        initial="hidden"
        animate="visible"
        className="text-hueneu-primary"
      >
        neu
      </motion.span>
    </div>
  );
};

export default AnimatedLogo;
