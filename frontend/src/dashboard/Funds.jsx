import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-xl p-5">
        <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-0">
          Instant, zero-cost fund transfers with{" "}
          <span className="font-medium">UPI</span>
        </p>
        <div className="flex gap-3">
          <Link
            to="#"
            className="bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            Add funds
          </Link>
          <Link
            to="#"
            className="bg-fuchsia-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Withdraw
          </Link>
        </div>
      </div>

      {/* Equity & Commodity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Equity Card */}
        <div className="bg-white shadow-md rounded-xl p-5 space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Equity</h4>

          <div className="divide-y divide-gray-200">
            {/* Top section */}
            <div className="py-2 flex justify-between text-sm">
              <p>Available margin</p>
              <p className="font-medium text-green-600">4,043.10</p>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <p>Used margin</p>
              <p className="font-medium text-gray-700">3,757.30</p>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <p>Available cash</p>
              <p className="font-medium text-gray-700">4,043.10</p>
            </div>

            {/* Section Divider */}
            <div className="border-t my-3"></div>

            <div className="py-2 flex justify-between text-sm">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <p>Opening Balance</p>
              <p>3,736.40</p>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <p>Options premium</p>
              <p>0.00</p>
            </div>

            {/* Section Divider */}
            <div className="border-t my-3"></div>

            <div className="py-2 flex justify-between text-sm">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Card */}
        <div className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-gray-600 text-sm">
            You don&apos;t have a commodity account
          </p>
          <Link
            to="#"
            className="bg-fuchsia-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Open Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Funds;
