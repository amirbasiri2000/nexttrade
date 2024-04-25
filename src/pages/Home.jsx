import React from "react";
import Hero from "../components/Hero";
import Provisions from "../components/provisions/Provisions";
import CustomCalendaar from "../components/Calendar/CustomCalendar";
import PopularCourses from "../components/popularCourses/PopularCourses";
import MarketPulse from "../components/marketPulse/MarketPulse";
import AnalystEstimates from "../components/analystEstimates/AnalystEstimates";
import BecomeAnInstructor from "../components/BecomeAnInstructor";
import Testimonials from "../components/testimonials/Testimonials";
import TopCategories from "../components/topCategories/TopCategories";
import LearnAny from "../components/learnany/LearnAny";
import MoversAndShakers from "../components/moversandshakers/MoversAndShakers";

const Home = () => {
  return (
    <div className="max-w-[1500px]">
      <Hero />
      <Provisions />
      <CustomCalendaar />
      <PopularCourses />
      <MarketPulse />
      <MoversAndShakers />
      <AnalystEstimates />
      <LearnAny />
      <TopCategories />
      <BecomeAnInstructor />
      <Testimonials />
    </div>
  );
};

export default Home;
