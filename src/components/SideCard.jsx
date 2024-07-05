import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LeftImageRightText = () => {
  const data = [{
    image: "./src/images/datinglove.jpg",
    title: "We’re love scientists.",
    description: "Our MyAfricanFriends researchers, behavioral analysts, and matchmakers study daters and compatibility so we can make Hinge better for you. We’ve gotten pretty good at it.",
  }];

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5 // Trigger animation when 50% of the element is in view
  });

  return (
    <div>
      {data.map((value, index) => (
        <motion.div
          key={index}
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center p-4 bg-white shadow-lg rounded-lg"
        >
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <img src={value.image} alt="description" className="w-[70%] md:w-full p-7" />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 pl-4 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-10 text-[#105d5e]">Discover</h2>
            <h2 className="text-2xl md:text-6xl font-bold mb-2">{value.title}</h2>
            <p className="text-gray-700 text-xl md:text-3xl">{value.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default LeftImageRightText;


