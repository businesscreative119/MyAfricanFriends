import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={ref} className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-center lg:text-left text-lg xl:text-xl mb-20 p-4 text-[#105d5e]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headingVariants}
      >
        Our Approach
      </motion.h1>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 md:pr-8">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-60"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            Had your last first date?
          </motion.h1>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-12">
          <motion.p
            className="text-3xl text-gray-700 leading-relaxed mt-32"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
            This is the paragraph text that accompanies the heading. It will be displayed on the right side of the heading in larger screens due to the flexbox setup.
          </motion.p>
          <div className="mt-8">
            <a href="#" className="px-8 py-3 bg-[#bb63ff] text-white rounded-full hover:bg-zinc-400 cursor-pointer">
              How we do it
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
