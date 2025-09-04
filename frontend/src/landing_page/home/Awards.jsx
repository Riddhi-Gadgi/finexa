import React from "react";

function Awards() {
  return (
    <section className="container  px-12 py-12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className=" flex justify-center">
          <img
            src="media/Images/largestBroker.svg"
            alt="Largest Broker"
            className="w-8/12 max-w-md"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 ">
            Largest stock broker in India
          </h3>
          <p className="text-gray-600 mb-6 pr-6 text-left">
            2+ million Finexa clients contribute to over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>

          {/* Lists */}
          <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
            <ul className="space-y-2">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul className="space-y-2">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>

          {/* Press Logos */}
          <img
            src="media/Images/pressLogos.png"
            alt="Press Logos"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Awards;
