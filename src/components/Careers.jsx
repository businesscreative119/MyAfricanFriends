import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiCode, FiBook, FiUsers, FiBriefcase } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

const Careers = () => {
    const handleButtonClick = () => {
        alert ("Working on Back-End ... wait");
    };

    const Data = [
        { heading: "Help more people find their person", buttonText: "Find Openings", onButtonClick: handleButtonClick },
    ];

    return (
        <>
        {/* 3 section start here */}
<div className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-100 rounded-md shadow-md">
  {Data.map((value, index) => (
    <div key={index} className="py-4 md:py-12 m-2 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
      <h1 className="text-lg md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
        {value.heading}
      </h1>
      <button
        className="py-2 px-6 bg-zinc-900 hover:bg-purple-500 text-white font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={value.onButtonClick}
      >
        {value.buttonText}
      </button>
    </div>
  ))}
  <div className="flex justify-center items-center w-full md:w-auto md:p-4">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-lg "
      style={{ width: '100%' }} // Adjust width as needed
    >
      <input
        type="text"
        className="w-full pl-10  pr-4 py-2 border-purple-500 outline-none rounded-lg focus:outline-none transition duration-300 bg-gray-100"
        placeholder="Search..."
      />
      <hr class="border-black my-6"></hr>
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
    </motion.div>
    
  </div>
</div>

 {/* 3 section start end */}
   
{/* second section start here */}
<div className="bg-zinc-900 min-h-screen overflow-hidden text-white ">
      <div className="container mx-auto py-12 px-4">
        <div className="grid  md:grid items-start gap-4 mb-8">
          <h1 className="text-4xl font-bold text-left">Careers at MyAfricanFriends</h1>
          <h1 className='text-sm'>
            Join our team and help us build the future of dating for the African community.
            </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-end gap-8">
          <div></div> {/* Empty div to push the cards to the right side on larger screens */}
          <div className="space-y-6">
            <motion.div
              className="flex items-center bg-zinc-800 shadow-lg rounded-lg p-6 mb-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FiPhone className="text-purple-500 text-8xl mr-4" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">A call to get to know each other</h2>
                <p>
                  As a first step, we want to have a quick chat to learn more about you, your career goals, and why you’re interested in MyAfricanFriends and the role you applied for. Bring your questions—this should be a good fit for both of us!
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center bg-zinc-800 shadow-lg rounded-lg p-6 mb-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FiCode className="text-purple-500 text-8xl mr-4" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">The skills interview</h2>
                <p>
                  You’ll meet with members of the team you’d be working with at MyAfricanFriends to discuss your experience in the key skills needed for the role. (We’ll make sure we’re on the same page about what they are before the interview.) It’s also a good time to get answers to all your nitty-gritty questions about the day-to-day work on this team.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center bg-zinc-800 shadow-lg rounded-lg p-6 mb-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FiBook className="text-purple-500 text-8xl mr-4" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">The narrative interview</h2>
                <p>
                  Let’s talk past, present, and future. Come prepared with examples from previous roles that display a growth mindset. This isn’t a memorization exercise, so feel free to bring notes that help highlight prior projects.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center bg-zinc-800 shadow-lg rounded-lg p-6 mb-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FiUsers className="text-purple-500 text-8xl mr-4" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">The culture interview</h2>
                <p>
                  The culture interview is near and dear to our hearts, because it’s “how we work.” It’s crucial that you not only embody our values, but that you thrive at MyAfricanFriends. You’ll talk to team members from all over the organization, who have been trained to conduct these interviews.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center bg-zinc-800 shadow-lg rounded-lg p-6 mb-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FiBriefcase className="text-purple-500 text-8xl mr-4" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Making an offer</h2>
                <p>
                  Phew, we made it! We try to make the offer part of the process a positive one, so we’ll do our best to get it to you quickly. And we’ll be available to chat through it and answer questions. If we’re not making you an offer, we’ll let you know that too. No ghosting, we promise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
{/* second section end here */}



            <div className="m-4 md:m-20">
                <div className="container bg-zinc-900 text-white w-full h-auto md:h-[30rem] p-4 md:p-10">
                    <div className="flex flex-col md:flex-row overflow-x-auto space-y-4 md:space-y-0 md:space-x-4 p-4">
                        {[
                            { number: "01", title: "Open the Circle", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                            { number: "02", title: "Lead with Love", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                            { number: "03", title: "Know Our Unknowns", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                            { number: "04", title: "No Spokespeople", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                            { number: "05", title: "Zero Hate", text: "We have a zero-tolerance for hateful speech or action, especially when it relates to someone's background, beliefs, disabilities, or identity. Any incidents should be reported immediately to our HR team or Chief People Officer." },
                            { number: "06", title: "Full Equity", text: "We treat every member of our community equally regardless of their background, beliefs, disabilities, or identity when it comes to employment, compensation, or community membership. Any concerns or questions should be directed to our Chief People Officer." },
                            { number: "07", title: "Employee Resource Groups", text: "We have six Employee Resource Groups (ERGs)—Asian, Unapologetic, Disability, LGBTQIA+, Vibras, and Women/Nonbinary—that hold regular meetings. Past ERG events have included panels, speaker series, networking mixers, happy hours, and retreats." }
                        ].map((item, index) => (
                            <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 p-2">
                                <div className="text-8xl">{item.number}</div>
                                <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                                <p className="mt-2 text-sm md:text-base lg:text-lg text-white">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Careers;
