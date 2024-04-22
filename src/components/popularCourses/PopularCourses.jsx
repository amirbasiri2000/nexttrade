import React from "react";
import MainTitle from "../../common/MainTitle";
import Course from "./Course";

const data = [
  {
    id: 1,
    img: "https://www.nexttradeforex.com/wp-content/uploads/2023/04/Trader.avif",
    alt: "Course 1",
    title: "What is Algo Trading",
  },
  {
    id: 1,
    img: "/assets/Algo-trading.png",
    alt: "Course 1",
    title: "What is lifestyle trader ?",
  },

  {
    id: 3,
    img: "/assets/forex-lifestyle2.jpg",
    alt: "Course 3",
    title: "Best practices for creating a successful Forex lifestyle",
  },
];

const PopularCourses = () => {
  return (
    <div className="wrapper mt-20">
      <div>
        <MainTitle title="our popular courses" />

        {/* courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((item) => (
            <Course
              key={item.id}
              img={item.img}
              alt={item.alt}
              title={item.title}
            />
          ))}
        </div>

        {/* button */}
        <div className="flex justify-center mt-8">
          <button className="capitalize  text-blue-dark text-lg font-semibold py-6 px-10 bg-gradient-to-t from-[#F0D785] via-[#9C7049] to-[#F0D785] shadow-xl rounded-lg">
            View all Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
