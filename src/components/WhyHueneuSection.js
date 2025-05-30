import { motion } from 'framer-motion';

const WhyHueneuSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="why-hueneu" className="py-20 md:py-32 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hueneu-primary mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          Why hueneu?
        </motion.h2>

        <motion.div 
          className="space-y-8 text-neutral-700 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ ...textVariants, transition: { ...textVariants.transition, delay: 0.2 } }}
        >
          <p>
            We don’t just design—<span className="italic text-hueneu-accent font-medium">we decode stories</span>.
            We listen for the quiet narratives, the unspoken dreams, the subtle shifts that define you.
          </p>
          <p>
            At hueneu, design is a gentle excavation, a process of unearthing the authentic and translating it into visuals that <span className="font-medium text-hueneu-primary">speak quietly but resonate deeply</span>.
          </p>
          <p>
            We believe in the power of <span className="border-b-2 border-hueneu-accent pb-1">calm</span>, the allure of <span className="border-b-2 border-hueneu-accent pb-1">mystery</span>, and the strength of perfect <span className="border-b-2 border-hueneu-accent pb-1">balance</span>.
            Our designs don't shout; they invite you in, offering a space of warmth and unexpected delight.
          </p>
          <p>
            If you're looking for more than just aesthetics, if you seek a design partner who will cherish your story as their own, you've found your place.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHueneuSection;
