import React from "react";

const Course = ({ img, alt, title }) => {
  return (
    <div className="bg-blue-light hover:scale-105 transition rounded-[10px] overflow-hidden h-[400px] p-4 pb-7">
      <div className="h-[80%] ">
        <a href="/">
          <img className="h-full w-full object-cover" src={img} alt={alt} />
        </a>
      </div>

      <div className="py-5">
        <h3 className="text-gold-light_400 text-2xl font-semibold">
          <a href="">{title}</a>
        </h3>
      </div>
    </div>
  );
};

export default Course;
