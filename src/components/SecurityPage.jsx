// SecurityPage.js

import React from 'react';

const SecurityPage = () => {
  return (
    <div className='w-full bg-zinc-900 text-white h-[40rem] '>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-purple-500">Security</h1>
        <div className="prose prose-lg">
          <p>
            Your security is our top priority at My African Friends. We take several measures
            to ensure your data and privacy are protected.
          </p>
          <p>
            Here are some of the security features we implement:
          </p>
          <ul className="list-disc list-inside">
            <li>Secure Socket Layer (SSL) encryption for all data transmissions.</li>
            <li>Regular security audits and updates to our infrastructure.</li>
            <li>Two-factor authentication (2FA) options for enhanced account security.</li>
            <li>Strict adherence to data protection regulations.</li>
          </ul>
          <p>
            For more details on our security practices, please contact our support team.
          </p>
        </div>
      </div>
      </div>
  );
};

export default SecurityPage;
