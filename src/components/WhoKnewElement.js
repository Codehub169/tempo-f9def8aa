import { motion } from 'framer-motion';

const WhoKnewElement = () => {
  return (
    <motion.div 
      className="relative my-12 md:my-16 p-2 group w-full flex justify-center items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
    >
      <motion.div 
        className="absolute w-32 h-32 md:w-40 md:h-40 bg-hueneu-accent rounded-full filter blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"
        variants={{
          hidden: { scale: 0.5, opacity: 0 },
          visible: { scale: 1, opacity: 0.3, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
        }}
      />
      <motion.h3 
        className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-hueneu-accent relative z-10 select-none"
        variants={{
          hidden: { opacity: 0, y: 30, rotateZ: -5 },
          visible: { 
            opacity: 1, 
            y: 0, 
            rotateZ: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
          }
        }}
      >
        Who Knew?
      </motion.h3>
      <motion.p
        className="absolute bottom-[-30px] md:bottom-[-40px] text-sm text-neutral-600 font-sans z-10 p-2 bg-white/50 backdrop-blur-sm rounded-md shadow-sm"
        variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.5 } }
        }}
      >
        The spark of surprise in every story.
      </motion.p>
    </motion.div>
  );
};

export default WhoKnewElement;
