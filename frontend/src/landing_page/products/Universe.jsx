import React from "react";

function Universe() {
  const partners = [
    {
      img: "media/Images/FinexaFundhouse.png",
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: "media/Images/sensibullLogo.svg",
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      img: "media/Images/smallcaseLogo.png",
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      img: "media/Images/goldenpiLogo.png",
      desc: "SEBI registered Debt Broker & OBPP license holder",
    },
    {
      img: "media/Images/streakLogo.png",
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: "media/Images/dittoLogo.png",
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div className="container mx-auto p-6 px-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
          The Finexa Universe
        </h1>
        <p className="text-gray-500 text-lg md:text-xl">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={partner.img}
              alt={`Partner ${index + 1}`}
              className="w-1/2 mb-4"
            />
            <p className="text-gray-600 text-sm md:text-base">{partner.desc}</p>
          </div>
        ))}
      </div>

      {/* Sign Up Button */}
      <div className="text-center mt-12">
        <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors text-lg">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
