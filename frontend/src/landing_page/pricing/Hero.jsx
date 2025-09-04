import React from "react";

function Pricing() {
  const pricingOptions = [
    {
      img: "media/Images/pricingEquity.svg",
      title: "Free equity delivery",
      desc: "All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.",
    },
    {
      img: "media/Images/intradayTrades.svg",
      title: "Intraday and F&O trades",
      desc: "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.",
    },
    {
      img: "media/Images/pricingEquity.svg",
      title: "Free direct MF",
      desc: "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
    },
  ];

  return (
    <div className="container mx-auto p-6 px-12 mt-8">
      {/* Heading */}
      <div className="text-center border-b-amber-50 pb-6 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Pricing
        </h1>
        <h3 className="text-gray-500 mt-3 text-lg md:text-xl">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={option.img}
              alt={option.title}
              className="w-32 h-32 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              {option.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">{option.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
