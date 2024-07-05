import React from 'react';

const data = [
  {
    title: 'Card Title 1',
    content: 'This is some content for card 1.',
    link: '#',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Card Title 2',
    content: 'This is some content for card 2.',
    link: '#',
    image: 'https://via.placeholder.com/150'
  },
  // Add more card data as needed
];

const CareerCard = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-6">
      {data.map((value, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <a href={value.link} className="block hover:underline">
            <img src={value.image} alt={`Card ${index}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-900">{value.title}</h2>
              <p className="text-sm md:text-base lg:text-lg text-zinc-600 mt-2">{value.content}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CareerCard;
