import React from "react";
import { ArrowRight } from "lucide-react";

function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-24 py-16">
      {/* Left Text Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Unbeatable pricing
          </h3>
          <p className="text-gray-600 mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-fuchsia-600 font-medium hover:underline"
          >
            See Pricing <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition">
            <h1 className="text-4xl font-bold text-fuchsia-600 mb-3">₹0</h1>
            <p className="text-gray-700">
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition">
            <h1 className="text-4xl font-bold text-fuchsia-600 mb-3">₹20</h1>
            <p className="text-gray-700">Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
