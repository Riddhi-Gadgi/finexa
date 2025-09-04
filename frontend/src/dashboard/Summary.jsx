import React from "react";

const Summary = () => {
  return (
    <div className="space-y-6">
      {/* Equity Section */}
      <div className="bg-white shadow-md rounded-2xl p-5 mt-12">
        <h6 className="text-gray-700 font-semibold text-lg mb-4">Equity</h6>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Left Part */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">3.74k</h3>
            <p className="text-sm text-gray-500">Margin available</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px bg-gray-200" />

          {/* Right Part */}
          <div className="flex-1 space-y-2">
            <p className="flex justify-between text-sm text-gray-600">
              <span>Margins used</span> <span className="font-medium">0</span>
            </p>
            <p className="flex justify-between text-sm text-gray-600">
              <span>Opening balance</span>{" "}
              <span className="font-medium">3.74k</span>
            </p>
          </div>
        </div>
      </div>

      {/* Holdings Section */}
      <div className="bg-white shadow-md rounded-2xl p-5">
        <h6 className="text-gray-700 font-semibold text-lg mb-4">Holdings (13)</h6>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Left Part */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-600">
              1.55k{" "}
              <small className="text-sm font-medium text-green-500">
                +5.20%
              </small>
            </h3>
            <p className="text-sm text-gray-500">P&amp;L</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px bg-gray-200" />

          {/* Right Part */}
          <div className="flex-1 space-y-2">
            <p className="flex justify-between text-sm text-gray-600">
              <span>Current Value</span>{" "}
              <span className="font-medium">31.43k</span>
            </p>
            <p className="flex justify-between text-sm text-gray-600">
              <span>Investment</span>{" "}
              <span className="font-medium">29.88k</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
