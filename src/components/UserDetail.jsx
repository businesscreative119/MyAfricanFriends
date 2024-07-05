import React from "react";

const UserDetail = () => {
  return (
    <div className="bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg mt-20 mb-20">
        <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-2xl leading-6 font-medium text-gray-900 text-center ">
                User Details
              </h3>
              <div className="mt-2">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="Enter your First Name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Enter your Last Name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        placeholder="Enter your Age"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="ageRangeFrom"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Age Range (From)
                      </label>
                      <input
                        type="number"
                        id="ageRangeFrom"
                        placeholder="From"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="ageRangeTo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Age Range (To)
                      </label>
                      <input
                        type="number"
                        id="ageRangeTo"
                        placeholder="To"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="lookingFor"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Looking For
                      </label>
                      <input
                        type="text"
                        id="lookingFor"
                        placeholder="What are you looking for?"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Enter your Address"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="work"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Work
                      </label>
                      <input
                        type="text"
                        id="work"
                        placeholder="Where do you work?"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="moreInfo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        More Info
                      </label>
                      <textarea
                        id="moreInfo"
                        placeholder="Tell us more about yourself..."
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="lifestyle"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Lifestyle
                      </label>
                      <textarea
                        id="lifestyle"
                        placeholder="Describe your lifestyle..."
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="passions"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Passions
                      </label>
                      <textarea
                        id="passions"
                        placeholder="What are your passions?"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#bb63ff] text-base font-medium text-white hover:bg-zinc-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
