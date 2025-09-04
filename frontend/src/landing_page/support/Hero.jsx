import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-fuchsia-50 to-purple-50 py-10" id="supportHero">
      {/* Header */}
      <div className="container mx-auto flex justify-between items-center px-6 mb-10">
        <h4 className="text-xl font-semibold text-gray-800">Support Portal</h4>
        <a
          href="#"
          className="text-fuchsia-600 font-medium hover:underline"
        >
          Track Tickets
        </a>
      </div>

      {/* Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Search & Quick Links */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition mb-4"
          />
          <div className="flex flex-col gap-2">
            <a href="#" className="text-fuchsia-600 hover:underline">Track account opening</a>
            <a href="#" className="text-fuchsia-600 hover:underline">Track segment activation</a>
            <a href="#" className="text-fuchsia-600 hover:underline">Intraday margins</a>
            <a href="#" className="text-fuchsia-600 hover:underline">Kite user manual</a>
          </div>
        </div>

        {/* Featured */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Featured</h1>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <a href="#" className="text-fuchsia-600 hover:underline">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-fuchsia-600 hover:underline">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
