import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ChevronsRight } from 'lucide-react';

const ServiceItem = ({ iconSrc, iconAlt, title, microcopy, animationVariants }) => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
      variants={animationVariants}
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 md:w-16 md:h-16 mr-4 rounded-md flex items-center justify-center bg-hueneu-secondary group-hover:bg-hueneu-accent transition-colors duration-300">
          <Image src={iconSrc} alt={iconAlt} width={32} height={32} className="w-6 h-6 md:w-8 md:h-8 text-hueneu-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl md:text-2xl font-display font-semibold text-hueneu-primary">{title}</h3>
      </div>
      <p className="text-neutral-600 font-sans text-sm md:text-base mb-6 leading-relaxed flex-grow">
        {microcopy}
      </p>
      <a
        href="#contact"
        onClick={handleScrollToContact}
        className="inline-flex items-center text-hueneu-accent font-semibold font-sans group mt-auto text-sm md:text-base"
      >
        Discuss Project
        <ChevronsRight className="w-5 h-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
};

export default ServiceItem;
