// PrivacyPolicy.js

import React from 'react';
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-zinc-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg shadow px-5 py-6 sm:px-6">
          <h2 className="text-3xl font-bold text-purple-500 mb-6">Privacy Policy</h2>
          
          <div className="prose prose-lg text-white">
            <p>Your privacy matters to us. This Privacy Policy explains how 'myafricanfriends' collects, uses, and protects your personal information.</p>
            
            <p>This specific Privacy Policy regarding consumer health data is intended for residents of Washington and Nevada and supplements our general Privacy Policy.</p>
            
            <h3 className="text-xl font-semibold mt-4">Collection and Use of Consumer Health Data</h3>
            <p>We do not intentionally collect “consumer health data,” which includes information about your physical or mental health status. However, in some jurisdictions, the information we gather about you may be classified as “consumer health data.” We primarily use the information collected to provide our services and facilitate connections among our members.</p>
            
            <h3 className="text-xl font-semibold mt-4">Disclosure of Consumer Health Data</h3>
            <p>We may share consumer health data with the following categories of third parties:</p>
            
            <ul className="list-disc pl-5">
              <li>Other users. Information you voluntarily share on our platform, such as your public profile.</li>
              <li>Service providers. Vendors who assist in operating our services, including data hosting, maintenance, customer support, and security.</li>
              <li>Affiliates. Partners who aid in data processing activities, ensuring our services function smoothly and securely.</li>
              <li>Corporate transactions. Information may be disclosed in connection with mergers, acquisitions, or other corporate changes.</li>
              <li>Legal obligations. Data may be disclosed to comply with legal processes, protect individuals' safety, prevent crime, or assert legal rights.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-4">Your Rights</h3>
            <p>You have rights under applicable privacy laws, including the right to access and control your personal data. To exercise these rights or inquire about our privacy practices, please contact our customer care team <Link to="/Help" className="text-purple-500">here</Link>.</p>
            
            <p>For more details on how we handle your data, please contact us at privacy@myafricanfriends.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
