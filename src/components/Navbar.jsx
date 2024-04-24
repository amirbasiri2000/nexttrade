import React, { useState } from "react";
import Languages from "../common/Languages";

const Navbar = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="w-full wrapper pt-2 lg:pt-2 bg-blue-light">
      <div className="">
        <div className="flex justify-between items-center relative">
          <a href="/" className="max-w-[150px]">
            <img src="/assets/logo.png" className="w-full" alt="Logo" />
          </a>
          {/* _________________________ */}
          <div
            className={`absolute bg-blue-light lg:bg-inherit w-full py-4 lg:py-0 lg:relative top-full flex-col lg:flex-row flex lg:justify-end gap-2 ${
              showMobileMenu ? "block" : "hidden lg:flex"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 text-[14px] space-x-0 lg:space-x-4">
              <div className="group inline-block ">
                <button className="outline-none focus:outline-none text-white py-1 flex items-center">
                  <span className="pr-1">Home</span>
                  <span>
                    <svg
                      className="fill-current h-5 w-5 transform group-hover:-rotate-180
                        transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-gold-light_200 rounded-lg px-6 py-2 transform scale-0 group-hover:scale-100 absolute 
                transition duration-150 ease-in-out origin-top min-w-32 cursor-pointer"
                >
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm px-3 py-1 hover:text-white ">
                    Programming
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm px-3 py-1 hover:text-white">
                    DevOps
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm relative px-3 py-1 hover:text-white">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="pr-1 flex-1">Langauges</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-5 w-5
                        transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="bg-gold-light_200 border px-6 py-2 rounded-lg absolute top-0 right-0 
                      transition duration-150 ease-in-out origin-top-left
                      min-w-32
                      "
                    >
                      <li className="px-3 py-1 text-blue-light border-b pt-3 border-blue-light hover:text-white ">
                        Javascript
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white rounded-sm relative px-3 py-1 ">
                        Java
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white px-3 py-1 ">
                        Go
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white px-3 py-1 ">
                        Rust
                      </li>
                    </ul>
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 px-3 py-1 hover:text-white">
                    Testing
                  </li>
                </ul>
              </div>

              <div className="text-white capitalize">
                <a href="/">Learn To Trade</a>
              </div>

              <div className="text-white capitalize">
                <a href="/">Market pulse</a>
              </div>

              <div className="group inline-block ">
                <button className="outline-none focus:outline-none text-white  py-1 flex items-center">
                  <span className="pr-1  ">Tools</span>
                  <span>
                    <svg
                      className="fill-current h-5 w-5 transform group-hover:-rotate-180
                        transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-gold-light_200 rounded-lg px-6 py-2 transform scale-0 group-hover:scale-100 absolute 
                transition duration-150 ease-in-out origin-top min-w-32 cursor-pointer"
                >
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm px-3 py-1 hover:text-white ">
                    Programming
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm px-3 py-1 hover:text-white">
                    DevOps
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm relative px-3 py-1 hover:text-white">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="pr-1 flex-1">Langauges</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-5 w-5
                        transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="bg-gold-light_200 border px-6 py-2 rounded-lg absolute top-0 right-0 
                      transition duration-150 ease-in-out origin-top-left
                      min-w-32
                      "
                    >
                      <li className="px-3 py-1 text-blue-light border-b pt-3 border-blue-light hover:text-white ">
                        Javascript
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white rounded-sm relative px-3 py-1 ">
                        Java
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white px-3 py-1 ">
                        Go
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white px-3 py-1 ">
                        Rust
                      </li>
                    </ul>
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 px-3 py-1 hover:text-white">
                    Testing
                  </li>
                </ul>
              </div>

              <div className="text-white capitalize">
                <a href="/">Forum</a>
              </div>

              <div className="text-white capitalize">
                <a href="/">Traders Community</a>
              </div>

              {/* ************* */}
            </div>

            {/* __________________ */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-6 ">
              <div className="bg-gradient-to-b from-white via-bg-gray-100 to-white rounded-3xl">
                <button className="px-6 py-2 text-gray-600">Log In</button>
              </div>

              <div className="group relative inline-block bg-gradient-to-b from-[#bb965f] via-[#f0d785] to-[#9c7049] rounded-3xl">
                <button className="outline-none focus:outline-none px-6 py-2 flex items-center">
                  <span className="pr-1">Sign Up</span>
                  <span>
                    <svg
                      className="fill-current h-5 w-5 transform group-hover:-rotate-180
                        transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-gold-light_200 rounded-lg px-4 py-2 transform scale-0 group-hover:scale-100 absolute top-full -left-3 mt-1
                transition duration-150 ease-in-out origin-top text-[14px] cursor-pointer w-max"
                >
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm py-1 hover:text-white ">
                    Join as STUDENT
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm  py-2 hover:text-white">
                    Join as INSTRUCTOR
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-white via-bg-gray-100 to-white text-gold-light_400 px-6 py-2 cursor-pointer">
                <div
                  className="flex items-center space-x-2"
                  onClick={() => setShowLanguages(true)}
                >
                  <img
                    className="w-8 h-7"
                    src="/assets/flags/en.png"
                    alt="En"
                  />
                  <span className="font-semibold">English</span>
                </div>
                {showLanguages && (
                  <Languages setShowLanguages={setShowLanguages} />
                )}
              </div>
            </div>
          </div>

          {/* __________Menu bar Icon________ */}
          <div
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className=" lg:hidden text-white border-2 rounded-lg p-1 cursor-pointer hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
