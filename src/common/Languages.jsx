import React from "react";
import { languages } from "../data/LanguagesData";

const Languages = ({ setShowLanguages }) => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-black/80 fixed top-0 left-0 z-[200]">
      <div
        onClick={() => setShowLanguages(false)}
        className="absolute bg-red-400 top-10 right-[100px] z-[200] rounded-full p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="bg-white w-[80vw] h-[65vh] py-2 px-4">
        <div className="flex flex-col flex-wrap w-full overflow-x-hidden overflow-y-scroll h-full">
          {languages?.map(({ id, flagSrc, name, href }) => (
            <a
              key={id}
              href={href}
              className="flex items-center space-x-2 cursor-pointer border-b py-[6px] px-1 border-[#e7e7e7] whitespace-nowrap h-[40px] hover:bg-blue-100 transition-colors rounded-sm"
            >
              <img src={flagSrc} alt="" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
