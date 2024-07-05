import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-black">
      <div className="border-b-2 border-gray-300 py-4 bg-zinc-900">
        <div
          className="flex justify-between items-center cursor-pointer text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold">{question}</h3>
          {isOpen ? <FaChevronUp className="text-purple-500" /> : <FaChevronDown className="text-purple-500" />}
        </div>
        {isOpen && <p className="mt-2 text-white">{answer}</p>}
      </div>
    </div>
  );
};


const FAQ = () => {
  const faqData = [
    {
      question: 'What is myafricanfriends?',
      answer: 'myafricanfriends is a dating website designed to connect African singles around the world.',
    },
    {
      question: 'How do I create an account?',
      answer: 'Click on the "Join Now" button and fill out the registration form with your details.',
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes, we use advanced security measures to protect your personal information.',
    },
    {
      question: 'Can I delete my account?',
      answer: 'Yes, you can delete your account by going to the settings page and clicking on "Delete Account".',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team via the "Help" page.',
    },
    {
      question: 'Are there any subscription fees?',
      answer: 'Yes, we offer both free and premium subscription plans. The premium plans come with additional features.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page and follow the instructions to reset your password.',
    },
    {
      question: 'Can I search for users based on location?',
      answer: 'Yes, you can use the search auto filters to find users based on their location.',
    },
    {
      question: 'How do I update my profile?',
      answer: 'Go to your profile page and click on "Edit Profile" to update your information.',
    },
  ];

  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-2xl mx-auto  p-4 text-white w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-500">Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
