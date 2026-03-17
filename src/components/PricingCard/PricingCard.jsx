import React from "react";
import PricingFeatures from "../PricingFeatures/PricingFeatures";

const PricingCard = ({ pricingCard }) => {
  const { name, price, features } = pricingCard;
  return (
    <div className="bg-blue-400/10 p-8 rounded-md text-center duration-500 hover:-translate-y-4 hover:shadow-lg hover:shadow-blue-400 hover:scale-105">
      <h2 className="text-xl font-semibold bg-blue-600 rounded-sm">{name}</h2>
      <h2 className="text-4xl font-semibold mt-5">{price} $</h2>
      <div className="text-left mt-7 bg-black/30 p-5 rounded-md shadow-blue-300/50 shadow-sm text-gray-300 space-y-2">
        {
            features.map((feature, index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
        }
      </div>
    </div>
  );
};

export default PricingCard;
