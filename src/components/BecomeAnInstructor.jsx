import React from "react";

const BecomeAnInstructor = () => {
  return (
    <div className="wrapper mt-16 z-10">
      <div className="flex flex-wrap flex-col md:flex-row items-center gap-2">
        <div className="flex-1 mb-8 md:mb-0 p-4">
          <div>
            <img src="/assets/img25.png" alt="Become An Instructor" />
          </div>
        </div>
        <div className="flex-1 pl-12 relative">
          <div className="pb-4">
            <div className="mb-4">
              <h2 className="text-gold-light_400 text-3xl font-extrabold">
                Become <br />
                An Instructor
              </h2>
            </div>

            <div className="mb-4">
              <p className="text-[15px] text-[#e9e9e97a]">
                If you think you can teach new as well as established ways of
                trading, you can collaborate with us. We prefer instructors with
                high experience of trading in all domains like forex, crypto,
                metals, shares, indices, commodities etc.
              </p>
            </div>
          </div>

          <div className="z-10 relative cursor-pointer rounded-[10px] text-[#020E51] font-semibold text-[16px] py-5 px-10 bg-gradient-to-t from-[#F0D785] via-[#9C7049] to-[#F0D785] shadow-xl w-fit">
            <a href="/">Start Teaching Today</a>
          </div>

          <img
            className="absolute -right-32 top-[70%] !z-0 opacity-70"
            src="/assets/bgicon2.png"
            alt="Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeAnInstructor;
