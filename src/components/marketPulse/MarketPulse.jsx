import React from "react";
import MainTitle from "../../common/MainTitle";
import Item from "./Item";

const MarketPulse = () => {
  return (
    <section className="wrapper mt-24">
      <div>
        <div>
          <MainTitle title="market pulse" />

          <p className="text-[#ffffff99] text-start md:text-center text-[12px] sm:text-[16px] font-medium shrink-0 leading-5 md:leading-7">
            Empower your forex trading journey by exploring our comprehensive
            market pulse page. This invaluable resource offers real-time
            insights, expert analyses, and the latest trends crucial for making
            informed trading decisions. Stay updated with up-to-the-minute
            developments, economic indicators, and geopolitical events shaping
            the forex market. Our platform provides a consolidated view of
            market sentiment and industry experts' perspectives, giving you a
            competitive edge. By referring to our market pulse, you gain a
            deeper understanding of currency pair behavior and trends, aiding
            you in crafting a robust trading strategy and potentially amplifying
            your profits in the exciting world of forex trading.
          </p>
        </div>

        {/* items */}
        <div className="">
          <div className="mt-16 grid md:grid-cols-2 gap-y-[6rem] sm:gap-y-14 md:gap-y-24 lg:gap-y-14">
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPulse;
