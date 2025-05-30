import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // Using Lucide for a clean icon

const ScrollIndicator = () => {
  const scrollToStory = () => {
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer p-2 group"
      onClick={scrollToStory}
      aria-label="Scroll to next section"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >
        <ChevronDown size={32} className="text-hueneu-primary group-hover:text-hueneu-accent transition-colors duration-300" />
      </motion.div>
      <span className="sr-only">Scroll down</span>
    </motion.div>
  );
};

export default ScrollIndicator;
