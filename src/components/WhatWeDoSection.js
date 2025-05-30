import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: '/icons/branding.svg',
    title: 'Branding',
    description: 'Your story, beautifully told.',
  },
  {
    icon: '/icons/packaging.svg',
    title: 'Packaging',
    description: 'Designs that feel like a gift.',
  },
  {
    icon: '/icons/social-media.svg',
    title: 'Social Media',
    description: 'Making your scroll-stop worthwhile.',
  },
  {
    icon: '/icons/stationery.svg',
    title: 'Stationery',
    description: 'Little notes, lasting impressions.',
  },
  {
    icon: '/icons/coffee-table-books.svg',
    title: 'Coffee Table Books',
    description: 'Turning pages into experiences.',
  },
  {
    icon: '/icons/creative-projects.svg',
    title: 'Creative Projects',
    description: 'Where wild ideas find their form.',
  },
];

const WhatWeDoSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section 
      id="services" 
      className="py-20 md:py-32 bg-hueneu-secondary text-hueneu-primary"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-20 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group h-full"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-5 w-12 h-12 flex items-center justify-center bg-hueneu-accent/10 rounded-full group-hover:bg-hueneu-accent/20 transition-colors duration-300">
                <Image src={service.icon} alt={`${service.title} icon`} width={28} height={28} className="opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-hueneu-primary mb-3 tracking-tight">{service.title}</h3>
              <p className="font-sans text-neutral-600 text-base leading-relaxed mb-4 flex-grow">{service.description}</p>
              <a 
                href="#contact" 
                className="font-sans text-sm font-medium text-hueneu-accent hover:text-red-700 transition-colors duration-300 self-start inline-flex items-center group/link"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discuss Project
                <ArrowRight size={16} className="ml-2 opacity-0 group-hover/link:opacity-100 translate-x-[-5px] group-hover/link:translate-x-0 transition-all duration-300" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
