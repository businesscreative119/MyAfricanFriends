import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0

const Home = () => {
  const { loginWithRedirect } = useAuth0(); // Initialize Auth0 login
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    mobile: '',
    email: '',
    password: '',
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      mobile: value,
    }));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          staggerChildren: 0.3,
          duration: 1,
        }}
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('./src/images/hero.jpg')" }}
      >
        {isOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg">
              <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        <IoClose className="text-right" />
                      </button>
                    </div>
                    <h3 className="text-2xl leading-6 font-medium text-gray-900 text-center">
                      Join Here
                    </h3>
                    <div className="mt-2">
                      <form className="space-y-4">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Username
                              </label>
                              <input
                                type="text"
                                placeholder="Enter your Username"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="mobile"
                                className="text-sm font-medium text-gray-700"
                              >
                                Mobile No:
                              </label>
                              <PhoneInput
                                country={"ng"}
                                value={formData.mobile}
                                onChange={handlePhoneChange}
                                inputProps={{
                                  name: "mobile",
                                  required: true,
                                  autoFocus: false,
                                  className:
                                    "mt-1 block w-full px-12 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                                }}
                                onlyCountries={["za", "ss", "sd", "in"]}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                value={formData.email}
                                onChange={handleChange}
                                required
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
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => loginWithRedirect()} // Add Auth0 login here
                              className="mt-3 w-full md:w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0
                              sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Join with Google <FcGoogle className='m-1'/>
                            </button>
                            <button
                              type="submit"
                              className="mt-3 w-full md:w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#bb63ff] text-base font-medium text-white hover:bg-zinc-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                        <h1 className="text-sm text-center mt-4">
                          Join us today to find meaningful connections. Whether
                          for friendship, love, or companionship, our platform
                          helps you discover your perfect match. Join Now!
                        </h1>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            staggerChildren: 0.3,
            duration: 2,
          }}
          className="container mx-auto relative z-10 flex items-center h-full px-6 py-12"
        >
          <div className="max-w-lg text-left text-white">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                staggerChildren: 0.4,
                duration: 1,
              }}
              className="mt-6 text-lg md:text-4xl"
            >
              The dating app where relationships flourish and profiles vanish
              happily.
            </motion.p>
            <div className="mt-8">
              <a
                href="#"
                onClick={handleOpen}
                className="px-8 py-3 bg-[#bb63ff] text-white rounded-full hover:bg-zinc-400 cursor-pointer"
              >
                Join Now
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
