import React from "react";

function Education() {
  return (
    <section className="container mx-auto px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="media/Images/education.svg"
            alt="Education"
            className="w-4/5 max-w-md drop-shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-10">
          {/* Varsity */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Free and open market education
            </h3>
            <p className="text-gray-600 mb-3">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              className="inline-block text-fuchsia-600 font-medium hover:text-fuchsia-700 transition"
            >
              Varsity →
            </a>
          </div>

          {/* TradingQ&A */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Active trading community
            </h3>
            <p className="text-gray-600 mb-3">
              TradingQ&A, the most active trading and investment community in
              India for all your market-related queries.
            </p>
            <a
              href="#"
              className="inline-block text-fuchsia-600 font-medium hover:text-fuchsia-700 transition"
            >
              TradingQ&A →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
