import React from "react";
import MainTitle from "../../common/MainTitle";
import EstimateItem from "./EstimateItem";

const AnalystEstimates = () => {
  return (
    <div className="wrapper mt-16">
      <MainTitle title="Analyst Estimates" />

      <div className="mt-10">
        <EstimateItem />
      </div>
    </div>
  );
};

export default AnalystEstimates;
