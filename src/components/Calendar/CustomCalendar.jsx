import React, { useState } from "react";
import Calendar from "react-calendar";
import {
  add,
  compareAsc,
  format,
  isWeekend,
  setYear,
  setMonth,
  sub,
} from "date-fns";

// react-calendar CSS and overrides
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const rightArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-7 h-7 p-1 flex items-center justify-center bg-blue-dark text-gold-light_300 rounded-full"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

const leftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-7 h-7 p-1 justify-center items-center bg-blue-dark text-gold-light_300 rounded-full"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

const NavButton = ({ label, onClick }) => (
  <button
    className="!border-none"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    {label}
  </button>
);

const CustomCalendaar = ({ closingDate }) => {
  const now = new Date();
  const [value, onChange] = useState(closingDate);
  const [activeStartDate, setActiveStartDate] = useState(
    closingDate || new Date()
  );

  return (
    <div className="wrapper mt-16">
      <div>
        <div className="bg-gold-light_400 flex flex-col text-center">
          <h3 className="text-4xl text-blue-dark font-semibold pt-3">
            Live Training Days
          </h3>
          <div className="flex items-center mx-auto py-2 space-x-3">
            <div className="text-3xl text-blue-dark ">
              {format(activeStartDate, "MMMM")},{" "}
              {format(activeStartDate, "yyyy")}
            </div>
            <div className=" flex items-center space-x-1">
              <NavButton
                label={leftArrow}
                onClick={() =>
                  setActiveStartDate(sub(activeStartDate, { months: 1 }))
                }
              />
              <NavButton
                label={rightArrow}
                onClick={() =>
                  setActiveStartDate(add(activeStartDate, { months: 1 }))
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Calendar
            className="!w-full !bg-blue-light"
            activeStartDate={activeStartDate}
            calendarType="gregory"
            showNavigation={false}
            onChange={onChange}
            value={value}
            tileClassName={({ date }) =>
              closingDate?.toDateString() === date.toDateString()
                ? "initial-closing-date"
                : null
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCalendaar;
