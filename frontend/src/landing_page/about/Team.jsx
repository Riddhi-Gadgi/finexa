import React from "react";

function Team() {
  return (
    <div className="container mx-auto p-10 mt-12">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-fuchsia-700">
          People
        </h1>
      </div>

      {/* Team Card */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full lg:w-10/12 mx-auto">
          {/* Image & Name */}
          <div className="text-center lg:text-left lg:w-4/12">
            <img
              src="media/Images/nithinKamath.jpg"
              alt="Nithin Kamath"
              className="mx-auto lg:mx-0 rounded-full w-36 md:w-40 lg:w-44 shadow-md"
            />
            <h4 className="mt-4 text-xl font-semibold text-gray-800">
              Nithin Kamath
            </h4>
            <h6 className="text-gray-500">Founder, CEO</h6>
          </div>

          {/* Description */}
          <div className="lg:w-8/12 space-y-3 text-gray-600">
            <p>
              Nithin bootstrapped and founded Finexa in 2010 to overcome the
              hurdles he faced during his decade-long stint as a trader. Today,
              Finexa has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p className="text-fuchsia-700 font-medium">
              Connect on Homepage / TradingQnA / Twitter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
