import React from "react";

function Hero() {
  return (
    <div className="container mx-auto px-5 ">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-700 p-8  leading-relaxed ">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 border-t border-gray-300 pt-10 text-gray-600">
        {/* Left Spacer */}
        <div className="hidden lg:block lg:w-1/12"></div>

        {/* Left Column */}
        <div className="lg:w-5/12 space-y-4">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company Finexa,
            a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-5/12 space-y-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>

        {/* Right Spacer */}
        <div className="hidden lg:block lg:w-1/12"></div>
      </div>
    </div>
  );
}

export default Hero;
