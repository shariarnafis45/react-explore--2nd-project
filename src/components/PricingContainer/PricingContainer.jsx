import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingContainer = ({ pricingDataPromise }) => {
  const pricingData = use(pricingDataPromise);

  return (
    <div className="w-11/12 mx-auto pt-11">
      <h2 className="text-center text-5xl font-bold">Our Pricing Details</h2>
      <div className="mt-10 bg-black/20 border border-blue-300/20 p-10 rounded-md shadow-blue-300/5 shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
        {
            pricingData.data.map(pricingCard => <PricingCard key={pricingCard.id} pricingCard={pricingCard}></PricingCard>)
        }
      </div>
    </div>
  );
};

export default PricingContainer;
