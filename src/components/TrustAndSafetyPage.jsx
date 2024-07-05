import React from 'react';
import { FaShieldAlt, FaRegListAlt, FaUserShield } from 'react-icons/fa';

const TrustAndSafetyPage = () => {
  return (
    <div className="bg-zinc-900 w-full text-white min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto bg-zinc-900 p-4 sm:p-6 rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-500 mb-4 sm:mb-6 flex items-center">
          <FaShieldAlt className="mr-2" /> Trust & Safety
        </h1>
        <p className="text-gray-200 mb-4">
          Welcome to myafricanfriends! Your safety and trust are our top priorities. We strive to create a secure and friendly environment for all our users. Here are some guidelines and tips to help you stay safe while using our platform.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-purple-500 mb-3 sm:mb-4 flex items-center">
          <FaRegListAlt className="mr-2" /> Guidelines
        </h2>
        <ul className="list-disc list-inside text-gray-200 mb-6">
          <li>Respect other users and their boundaries.</li>
          <li>Do not share your personal information too quickly.</li>
          <li>Report any suspicious behavior immediately.</li>
          <li>Always meet in public places for the first few dates.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-purple-500 mb-3 sm:mb-4 flex items-center">
          <FaUserShield className="mr-2" /> Safety Tips
        </h2>
        <ul className="list-disc list-inside text-gray-200 mb-6">
          <li>Keep your personal information private.</li>
          <li>Trust your instincts. If something feels off, it probably is.</li>
          <li>Inform a friend or family member of your plans.</li>
          <li>Use the blocking and reporting features if necessary.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-purple-500 mb-3 sm:mb-4 flex items-center">
          <FaUserShield className="mr-2" /> Reporting and Blocking
        </h2>
        <p className="text-gray-200 mb-4">
          If you encounter any issues or suspicious activity, please report it immediately. We have a dedicated team that reviews all reports and takes appropriate action to ensure the safety of our community.
        </p>
        <p className="text-gray-200 mb-4">
          You can also block users who make you uncomfortable or violate our guidelines.
        </p>
      </div>
    </div>
  );
}

export default TrustAndSafetyPage;
