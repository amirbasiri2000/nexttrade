import React, { useRef, useState } from "react";
import Languages from "../common/Languages";
import useClickOutside from "../hooks/useClickOutside";

const Navbar = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  

  return (
    <div className="w-full relative wrapper pt-2 lg:pt-2 bg-blue-light">
      <div className="">
        <div className="flex items-center justify-between lg:justify-normal relative">
          <a href="/" className="max-w-[150px]">
            <img src="/assets/logo.png" className="w-full" alt="Logo" />
          </a>
          {/* _________________________ */}
          <div
            className={`absolute bg-blue-light lg:bg-inherit w-full py-4 lg:py-0 lg:relative top-full flex-col lg:flex-row flex lg:justify-end gap-2 z-50 h-[calc(100vh-130px)] lg:h-auto ${
              showMobileMenu
                ? "translate-x-0 duration-300"
                : "-translate-x-[110%] lg:translate-x-0 duration-500 lg:flex"
            }`}
          >
            <div className="flex flex-col lg:mx-auto lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 text-[14px] space-x-0 lg:space-x-4">
              <div className="group inline w-full cursor-pointer lg:w-fit">
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
                  className="bg-gold-light_200 
                  rounded-lg px-6 py-2 
                  transform
                  
                  hidden 
                  group-hover:block
                  lg:group-hover:block 
                  lg:scale-0 
                  lg:group-hover:scale-100 
                  lg:absolute 
                  
                  transition duration-150 ease-in-out origin-top 
                  lg:w-auto w-3/5 
                  cursor-pointer"
                >
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm px-3 py-1 hover:text-white ">
                    Who we are
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm px-3 py-1 hover:text-white">
                    Partnership
                  </li>
                  {/* <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm relative px-3 py-1 hover:text-white">
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
                      className="bg-gold-light_200 
                      border px-6 py-2 rounded-lg 
                      absolute top-0 right-0 
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
                  </li> */}
                  <li className="text-blue-light border-b border-blue-light  pt-3 px-3 py-1 hover:text-white">
                    Contact Us
                  </li>
                </ul>
              </div>

              <div className="text-white capitalize">
                <a href="/">Learn To Trade</a>
              </div>

              <div className="text-white capitalize">
                <a href="/">Market pulse</a>
              </div>

              <div className="group inline-block w-full lg:w-fit">
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
                  className="bg-gold-light_200 rounded-lg px-6 py-2 transform 
                  hidden 
                  group-hover:block
                  lg:group-hover:block 
                  lg:scale-0 
                  lg:group-hover:scale-100 
                  lg:absolute 

                transition duration-150 ease-in-out origin-top 
                  lg:w-auto w-3/5
                cursor-pointer"
                >
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm relative px-3 py-1 hover:text-white">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="pr-1 flex-1">Education</span>
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
                        Algo Trading
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white rounded-sm relative px-3 py-1 ">
                        Glossary
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white px-3 py-1 ">
                        Market Status
                      </li>
                    </ul>
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm relative px-3 py-1 hover:text-white">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="pr-1 flex-1">Screeners</span>
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
                        Crypto Screeners
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white rounded-sm relative px-3 py-1 ">
                        Forex Screeners
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white px-3 py-1 ">
                        Stock Screener
                      </li>
                    </ul>
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm relative px-3 py-1 hover:text-white">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="pr-1 flex-1">Calculators</span>
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
                        Fibonacci Calculator
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white rounded-sm relative px-3 py-1 ">
                        Pip Calculator
                      </li>
                    </ul>
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 px-3 py-1 hover:text-white">
                    Web Terminal
                  </li>
                  <li className="text-blue-light border-b border-blue-light  pt-3 px-3 py-1 hover:text-white">
                    Market Watch
                  </li>

                  <li className="text-blue-light border-b border-blue-light  pt-3 rounded-sm relative px-3 py-1 hover:text-white">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="pr-1 flex-1">Other</span>
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
                      className="bg-gold-light_200 border px-3 py-2 rounded-lg absolute top-0 right-0 
                      transition duration-150 ease-in-out origin-top-left
                      min-w-32
                      "
                    >
                      <li className="px-3 py-1 text-blue-light border-b pt-3 border-blue-light hover:text-white ">
                        Correlation
                      </li>
                      <li className="text-blue-light border-b pt-3 border-blue-light hover:text-white rounded-sm relative px-3 py-1 ">
                        Forex Volatillity
                      </li>
                    </ul>
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
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-3 ">
              <div className="bg-gradient-to-b from-white via-bg-gray-100 to-white rounded-3xl">
                <button className="px-4 w-max text-sm py-2 text-gray-700">
                  Log In
                </button>
              </div>

              <div className="group relative inline-block bg-gradient-to-b from-[#bb965f] via-[#f0d785] to-[#9c7049] rounded-3xl">
                <button className="outline-none focus:outline-none  px-2 lg:px-4 py-2 flex items-center w-max">
                  <span className=" text-sm">Sign Up</span>
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

              <div className="">
                <div
                  className="bg-gradient-to-b from-white via-bg-gray-100 to-white text-gold-light_400 px-2 py-2 cursor-pointer text-center ml-0 flex items-center space-x-1 w-max"
                  onClick={() => setShowLanguages(true)}
                >
                  <img
                    className="w-6 h-5"
                    src="/assets/flags/en.png"
                    alt="En"
                  />
                  <span className="font-semibold text-sm">English</span>
                </div>
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

      {showLanguages && (
        <Languages
          setShowLanguages={setShowLanguages}
        />
      )}
    </div>
  );
};

export default Navbar;
