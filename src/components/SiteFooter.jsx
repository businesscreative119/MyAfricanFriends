import React from 'react';
import { Link } from "react-router-dom";

const SiteFooter = () => {
  const data = [
    { image: "./src/images/facebook.png", link: "https://www.facebook.com" },
    { image: "./src/images/instagram.png", link: "https://www.instagram.com" },
    { image: "./src/images/twitter.png", link: "https://x.com/?lang=en" },
    { image: "./src/images/whatsapp.png", link: "https://web.whatsapp.com" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="uppercase mb-6 font-bold">MyAfricanFriends</h5>
            {/* Add any content here */}
            <div className="flex gap-7 mt-4 text-zinc-100">
  {data.map((value, index) => (
    <a href={value.link} key={index} className="hover:underline text-white">
      <img
        src={value.image}
        alt={`Social media ${index}`}
        style={{ width: '18px', height: '18px' }} // adjust the size as needed
      />
    </a>
  ))}
</div>
<div className="mt-9 text-left text-[.60rem] hidden md:block">
              <p className="text-[.65rem]">&copy; 2024 MyAfricanFriends.</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-white">
            <h5 className="mb-6 font-bold text-zinc-500">Index</h5>
            <ul className="list-none">
              <li className="mb-2">
                <Link to="/Careers" className="hover:underline">Careers</Link>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Discover</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline"></a>
              </li>
            </ul>
          
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="mb-6 font-bold text-zinc-500">Resources</h5>
            <ul className="list-none">
              <li className="mb-2">
            
                <Link to="/SafeDatingTips" className="hover:underline">Safe Dating Tips</Link>
              </li>
              <li className="mb-2">
              <Link to="/FAQ" className="hover:underline">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link to="/TrustAndSafetyPage" className="hover:underline">Trust & Safety</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="mb-6 font-bold text-zinc-500">Legal</h5>
            <ul className="list-none">
              <li className="mb-2">
              <Link to="/SecurityPage" className="hover:underline">Security</Link>
              </li>
              <li className="mb-2">
              <Link to="/Terms" className="hover:underline">Terms</Link>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Privacy</a>
              </li>
              <li className="mb-2"> 
              <Link to="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link>
              </li>
            </ul>
            
            <div className="mt-9 text-left text-[.60rem] md:hidden">
              <p className="text-[.65rem]">&copy; 2024 MyAfricanFriends. All rights reserved.</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;