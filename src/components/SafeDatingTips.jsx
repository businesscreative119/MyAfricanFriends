// src/components/SafeDatingTips.js
import React from 'react';
import { FaUserShield, FaMapMarkedAlt, FaPhoneAlt, FaExclamationTriangle, FaClock } from 'react-icons/fa';

const SafeDatingTips = () => {
  return (
    <div className="bg-zinc-900 w-full min-h-screen py-8 px-4 text-white">
      <div className="max-w-3xl mx-auto bg-zinc-900 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">Safe Dating Tips</h1>
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-purple-500 bg-zinc-900 flex items-start">
            <FaUserShield className="text-purple-500 w-8 h-8 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">1. Protect Your Personal Information</h2>
              <p className="mt-2">
                Be cautious about sharing personal information such as your home address, phone number, or financial details. Use the messaging service on the dating platform to communicate until you feel comfortable.
              </p>
            </div>
          </div>
          <div className="p-4 border-l-4 border-purple-500 bg-zinc-900 flex items-start">
            <FaMapMarkedAlt className="text-purple-500 w-8 h-8 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">2. Meet in Public Places</h2>
              <p className="mt-2">
                For your first few dates, meet in a public place with plenty of people around. Avoid meeting at your home or your date's home until you know them well.
              </p>
            </div>
          </div>
          <div className="p-4 border-l-4 border-purple-500 bg-zinc-900 flex items-start">
            <FaPhoneAlt className="text-purple-500 w-8 h-8 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">3. Inform a Friend or Family Member</h2>
              <p className="mt-2">
                Let someone you trust know where you are going and who you are meeting. Share your location using your phone and check in with them during your date.
              </p>
            </div>
          </div>
          <div className="p-4 border-l-4 border-purple-500 bg-zinc-900 flex items-start">
            <FaExclamationTriangle className="text-purple-500 w-8 h-8 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">4. Trust Your Instincts</h2>
              <p className="mt-2">
                If something feels off, trust your instincts and leave the situation. Your safety is more important than being polite.
              </p>
            </div>
          </div>
          <div className="p-4 border-l-4 border-purple-500 bg-zinc-900 flex items-start">
            <FaClock className="text-purple-500 w-8 h-8 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">5.Take Your Time</h2>
              <p className="mt-2">
                Don't rush into anything. Take your time to get to know the person and build trust gradually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeDatingTips;
