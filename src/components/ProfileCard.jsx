import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const meetups = [
  {
    id: 1,
    title: "Coffee Date",
    description: "Join us for a casual coffee date at the local café. It's a great opportunity to meet new people in a relaxed environment.",
    image: "https://cdn.pixabay.com/photo/2023/01/22/14/10/dinner-7736494_1280.jpg",
  },
  {
    id: 2,
    title: "Outdoor Picnic",
    description: "Enjoy a sunny afternoon with a picnic in the park. Bring your favorite snacks and meet new friends.",
    image: "https://cdn.pixabay.com/photo/2021/02/03/06/33/couple-5976849_1280.jpg",
  },
  {
    id: 3,
    title: "Movie Night",
    description: "Watch a movie under the stars. A perfect way to spend the evening with potential matches.",
    image: "https://cdn.pixabay.com/photo/2020/06/12/06/58/silhouettes-5289412_1280.jpg",
  },
];

const ProfileCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5 // Trigger animation when 50% of the element is in view
  });

  return (
    <div className="container mx-auto p-4">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-8"
      >
        Meetups
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meetups.map((meetup) => (
          <motion.div
            key={meetup.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img src={meetup.image} alt={meetup.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{meetup.title}</h2>
              <p className="text-gray-700">{meetup.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
