import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";

const data = [
  {
    photo:
      "https://cdn.pixabay.com/photo/2023/08/23/15/28/ai-generated-8208809_1280.jpg",
    name: "Name",
    age: 28,
    location: "City",
    bio: "Loves hiking, reading books, and spending time with her dog.",
  },
  {
    photo:
      "https://cdn.pixabay.com/photo/2018/04/17/11/52/portrait-3327369_1280.jpg",
    name: "Name",
    age: 28,
    location: "City",
    bio: "Loves hiking, reading books, and spending time with her dog.",
  },
  {
    photo:
      "https://cdn.pixabay.com/photo/2020/09/01/09/43/portrait-5534731_1280.jpg",
    name: "Name",
    age: 28,
    location: "City",
    bio: "Loves hiking, reading books, and spending time with her dog.",
  },
  {
    photo:
      "https://cdn.pixabay.com/photo/2014/01/30/00/07/couple-254683_1280.jpg",
    name: "Name",
    age: 28,
    location: "City",
    bio: "Loves hiking, reading books, and spending time with her dog.",
  },
  {
    photo:
      "https://cdn.pixabay.com/photo/2018/03/18/21/09/people-3238357_1280.jpg",
    name: "Name",
    age: 28,
    location: "City",
    bio: "Loves hiking, reading books, and spending time with her dog.",
  },
  {
    photo:
      "https://cdn.pixabay.com/photo/2020/09/25/12/55/woman-5601294_1280.jpg",
    name: "Name",
    age: 28,
    location: "City",
    bio: "Loves hiking, reading books, and spending time with her dog.",
  },
  {
    photo:
      "https://cdn.pixabay.com/photo/2014/01/30/00/21/couple-254684_1280.jpg",
    name: "Name",
    age: 28,
    location: "City",
    bio: "Loves hiking, reading books, and spending time with her dog.",
  },
  {
    photo:
      "https://cdn.pixabay.com/photo/2014/05/19/10/40/girl-347850_1280.jpg",
    name: "Name",
    age: 28,
    location: "City",
    bio: "Loves hiking, reading books, and spending time with her dog.",
  },
  {
    photo:
      "https://cdn.pixabay.com/photo/2016/02/05/12/16/smiling-1180847_1280.jpg",
    name: "Name",
    age: 28,
    location: "City",
    bio: "Loves hiking, reading books, and spending time with her dog.",
  },
  {
    photo:
      "https://cdn.pixabay.com/photo/2020/08/18/09/23/african-5497630_1280.jpg",
    name: "Name",
    age: 28,
    location: "City",
    bio: "Loves hiking, reading books, and spending time with her dog.",
  },
];

const btn = [
  {
    button: "English",
  },
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const profileData = [
    {
      image: "src/images/DatingCover.png",
      username: "username",
      userage: "18",
      address: "address",
    },
  ];

  useEffect(() => {
    const uploadIcon = document.getElementById("uploadicon");
    const uploadForm = document.getElementById("uploadform");
    const fileInput = uploadForm.querySelector('input[type="file"]');

    const handleIconClick = () => {
      fileInput.click();
    };

    const handleFileChange = () => {
      if (fileInput.files.length > 0) {
        uploadForm.submit();
      }
    };

    uploadIcon.addEventListener("click", handleIconClick);
    fileInput.addEventListener("change", handleFileChange);

    return () => {
      uploadIcon.removeEventListener("click", handleIconClick);
      fileInput.removeEventListener("change", handleFileChange);
    };
  }, []);

  return (
    <>
      <div className="p-2 flex flex-col md:flex-row">
        {/* Container for user dating information */}
        <div className="w-full md:w-1/3 p-4 rounded-xl bg-white border-2 border-zinc-300">
          {profileData.map((value, index) => (
            <div key={index} className="profile w-full min-h-[2vh] pt-0">
              <div className="w-full h-[10rem] md:h-[10rem] object-cover ">
                <img
                  src={value.image}
                  alt="Profile"
                  className="w-full h-full object-cover  rounded-xl"
                />
              </div>
              <form
                id="uploadform"
                hidden
                action="/fileupload"
                method="post"
                encType="multipart/form-data"
              >
                <input type="file" name="image" />
              </form>
              <div className="profdets flex flex-col items-center mt-0 ">
                <div className="relative">
                  <span
                    id="uploadicon"
                    className="w-10 h-10 absolute bottom-0 right-0 rounded-full flex items-center justify-center bg-zinc-200 cursor-pointer"
                  >
                    <FaPencilAlt />
                  </span>
                  <div className="w-32 h-32 bg-zinc-200 rounded-full overflow-hidden border-4 border-rose-500 ">
                    <img
                      className="w-full h-full object-cover"
                      src="src/images/datinglove.jpg"
                      alt="Profile"
                    />
                  </div>
                </div>
                <h1 className="text-3xl font-semibold mt-2 text-rose-500">
                  {value.username}
                </h1>
                <h1 className="text-3xl font-semibold text-zinc-700 mt-5">
                  {value.userage}
                </h1>
                <h3 className="text-md text-zinc-500">{value.address}</h3>
                <a
                  href="#"
                  onClick={handleOpen}
                  className="mt-2 px-7 py-2 mb-5 bg-rose-500 rounded-full text-sm text-white"
                >
                  Edit
                </a>
              </div>
              <hr className="border-t-2 border-gray-300 mb-11" />
              <div className="">
                <h1> Language I Know.</h1>
              </div>
              {btn.map((value, index) => (
                <div key={index} className="flex">
                  <h1 className="border-2 border-rose-500 m-2 rounded-full text-center w-16">
                    English
                  </h1>
                  <h1 className="border-2 border-rose-500 m-2 rounded-full text-center w-16">
                    {value.button}
                  </h1>
                </div>
              ))}
            </div>
          ))}
          <div className="">
            <h1>More About me.</h1>
          </div>
          {btn.map((value, index) => (
            <div key={index} className="flex ">
              <h1 className="border-2 border-rose-500 m-2 rounded-full text-center w-32">
                Not sureYeet
              </h1>
              <h1 className="border-2 border-rose-500 m-2 rounded-full text-center w-32">
                Master Degree
              </h1>
            </div>
          ))}
          <div className="">
            <h1>Life Style</h1>
          </div>
          {btn.map((value, index) => (
            <div key={index} className="flex ">
              <h1 className="border-2 border-rose-500 m-2 rounded-full text-center w-32">
                Non Smoker
              </h1>
              <h1 className="border-2 border-rose-500 m-2 rounded-full text-center w-32">
                Vegetarian
              </h1>
            </div>
          ))}
          <div className="">
            <h1>Passions</h1>
          </div>
          {btn.map((value, index) => (
            <div key={index} className="flex ">
              <h1 className="border-2 border-rose-500 m-2 rounded-full text-center w-16">
                Netflex
              </h1>
              <h1 className="border-2 border-rose-500 m-2 rounded-full text-center w-20">
                Self-Care
              </h1>
              <h1 className="border-2 border-rose-500 m-2 rounded-full text-center w-20">
                Instagram
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row text-center w-full">
          <div className="w-full overflow-y-scroll  h-screen p-4">
            <h1 className="relative flex m-4 text-left ">
              Suggestions{" "}
              <img
                src="https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/right_2-128.png"
                alt="ArrowIcons"
                className="absolute h-5 text-center w-auto left-24 m-1 block"
              />
            </h1>
            <div className="flex flex-wrap -mx-4">
              {data.map((value, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
                >
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      className="w-full h-56 object-cover object-center"
                      src={value.photo}
                      alt={value.name}
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {value.name}, {value.age}
                      </h2>
                      <p className="text-gray-600">{value.location}</p>
                      <p className="mt-2 text-gray-600">{value.bio}</p>
                      <div className="mt-4 flex justify-between">
                        <button className="px-4 py-2 bg-[#bb63ff] text-white rounded hover:bg-blue-400">
                          Connect
                        </button>
                        <button className="px-4 py-2 bg-[#105d5e] text-white rounded hover:bg-green-400">
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
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
                    Profile Edit
                  </h3>
                  <div className="mt-2">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Enter your Name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            placeholder="Enter your Username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="userID"
                            className="block text-sm font-medium text-gray-700"
                          >
                            User ID
                          </label>
                          <input
                            type="text"
                            id="userID"
                            placeholder="Enter your User ID"
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
                        {[
                          {
                            id: "address",
                            type: "text",
                            placeholder: "Enter your Address",
                          },
                          {
                            id: "works",
                            type: "text",
                            placeholder: "Enter your Work Details",
                          },
                        ].map((field) => (
                          <div key={field.id} className="flex flex-col">
                            <label
                              htmlFor={field.id}
                              className="block text-sm font-medium text-gray-700"
                            >
                              {field.id.charAt(0).toUpperCase() +
                                field.id.slice(1)}
                            </label>
                            <input
                              type={field.type}
                              id={field.id}
                              placeholder={field.placeholder}
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          More About Me
                        </label>
                        <textarea
                          id="moreAboutMe"
                          placeholder="Tell us more about yourself..."
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Life Style
                        </label>
                        <textarea
                          id="lifeStyle"
                          placeholder="Describe your lifestyle..."
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Passions
                        </label>
                        <textarea
                          id="passions"
                          placeholder="Share your passions..."
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#bb63ff] text-base font-medium text-white hover:bg-zinc-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Update
                        </button>
                      </div>
                      <h1 className="text-sm text-center">
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
    </>
  );
};

export default About;
