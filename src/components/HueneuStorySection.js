import { motion } from 'framer-motion';
import WhoKnewElement from './WhoKnewElement';

const HueneuStorySection = () => {
  return (
    <section 
      id="story" 
      className="min-h-screen py-20 md:py-32 bg-white text-hueneu-primary flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
        <motion.h2 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-hueneu-primary tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hue + Neu: Our Story
        </motion.h2>
        <motion.p 
          className="font-sans text-lg md:text-xl text-hueneu-dark-text mb-10 leading-relaxed md:leading-loose"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          At hueneu, we believe in the magic that happens at the intersection of vibrant creativity and grounding calm. 
          <span className="text-hueneu-accent font-semibold">
            Hue
          </span> represents the spectrum of color, emotion, and bold ideas we bring to every story. 
          <span className="text-hueneu-primary font-semibold">
            Neu
          </span> signifies the neutrality, clarity, and intentional balance that underpins our designs. 
          It&apos;s a dance between the evocative and the essential, crafting experiences that whisper loudly and linger softly.
        </motion.p>
      </div>
      <WhoKnewElement />
    </section>
  );
};

export default HueneuStorySection;
