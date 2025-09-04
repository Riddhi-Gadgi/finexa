import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mx-auto p-6 px-24">
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
        {/* Image Section */}
        <div className="lg:w-5/12 w-full flex justify-center">
          <img
            src={imageURL}
            alt={productName}
            className="w-56 md:w-60 lg:w-64 rounded-xl shadow-lg"
          />
        </div>

        {/* Text Card */}
        <div className="lg:w-7/12 w-full bg-white shadow-xl rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {productName}
          </h2>
          <p className="text-gray-600 mb-4">{productDescription}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href={tryDemo}
              className="inline-flex items-center gap-2 bg-fuchsia-600 text-white px-4 py-2 rounded-full shadow hover:bg-fuchsia-700 transition-colors"
            >
              Try Demo
              <i className="fa fa-long-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full shadow hover:bg-gray-200 transition-colors"
            >
              Learn More
              <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          {/* Store Badges */}
          <div className="flex flex-wrap items-center gap-4">
            <a href={googlePlay}>
              <img
                src="media/Images/googlePlayBadge.svg"
                alt="Google Play"
                className="h-6"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/Images/appstoreBadge.svg"
                alt="App Store"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
