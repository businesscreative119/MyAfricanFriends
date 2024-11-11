import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0
import LogoutButton from "./LogoutButton";
import { IoClose } from "react-icons/io5"; // Assuming you are using IoClose for the close icon

const countries = ["EN", "Arabic", "Chinese", "Dutch", "French", "German", "Italian", "Polish", "Portuguese", "Russian", "Spanish", "Turkish"];

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const { isAuthenticated } = useAuth0(); // Destructure isAuthenticated from Auth0

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleSignInOpen = () => setIsSignInOpen(true);
  const handleSignInClose = () => setIsSignInOpen(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-zinc-100 text-white-50 border-gray-40"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={handleMenuToggle}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <img
                  src="/src/images/myafricanfriends.png"
                  className="w-[60%] ml-[30%] md:w-1/3 lg:w-[79%] h-auto p-3"
                  alt="logo"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link to="/" className="text-zinc-900 block px-3 py-2 rounded-md text-base font-medium hover:text-[#105d5e]">
                    Overview
                  </Link>
                  <Link to="/Discover" className="text-zinc-900 block px-3 py-2 rounded-md text-base font-medium hover:text-[#105d5e]">
                    Meetups
                  </Link>
                  <Link to="/Careers" className="text-zinc-900 block px-3 py-2 rounded-md text-base font-medium hover:text-[#105d5e]">
                    Careers
                  </Link>
                  <Link to="/Help" className="text-zinc-900 block px-3 py-2 rounded-md text-base font-medium hover:text-[#105d5e]">
                    Help
                  </Link>
                  <Link to="/UserDetail" className="text-zinc-900 block px-3 py-2 rounded-md text-base font-medium hover:text-[#105d5e]">
                    Community
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:block sm:ml-6">
              <div className="flex space-x-4">
                {isAuthenticated ? (
                  <LogoutButton /> // Render Log Out if authenticated
                ) : (
                  <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    href="#"
                    onClick={handleSignInOpen}
                    className="text-white px-3 py-2 font-medium flex items-center bg-zinc-900 opacity-32 rounded-full hover:bg-zinc-400 cursor-pointer text-sm text-[.55rem] lg:text-[.80rem]"
                  >
                    <FaUser className="mr-1 text-[.60rem] lg:text-[.70rem]" />
                    Sign In
                  </motion.a>
                )}
                <div className="flex space-x-4">
                  <a href="#" className="px-0 py-2 font-medium flex items-center text-zinc-900 opacity-32 rounded-full text-sm cursor-pointer">
                    <MdLanguage className="text-xl" />
                    <select
                      id="country"
                      name="country"
                      className="appearance-none border-none w-9 bg-transparent outline-none focus:outline-none"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                      <option className="mt-12 bg-white border-none" value="" disabled>
                        EN
                      </option>
                      {countries.map((country) => (
                        <option key={country} value={country} className="bg-white border-none">
                          {country}
                        </option>
                      ))}
                    </select>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {isSignInOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
        >
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg">
            <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleSignInClose}
                      className="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      <IoClose className="text-right" />
                    </button>
                  </div>
                  <h3 className="text-2xl leading-6 font-medium text-gray-900 text-center">
                    Sign In Here
                  </h3>
                  <div className="mt-2">
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          id="email"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter Your Password"
                          id="password"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#bb63ff] text-base font-medium text-white hover:bg-zinc-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Sign In
                        </button>
                      </div>
                      <h1 className="text-sm text-center">
                        Join us today to find meaningful connections. Whether
                        for friendship, love, or companionship, our platform
                        helps you discover your perfect match. Sign up now!
                      </h1>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
