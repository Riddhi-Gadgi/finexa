// TopBar.jsx
import React from "react";
import Menu from "./Menu";

const IndexCard = ({ name, value, percent }) => {
  const isPositive = percent >= 0;

  return (
    <div className="px-4 py-2 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-md flex items-center gap-3 text-white transition transform hover:scale-105 hover:shadow-lg">
      <p className="text-xs font-medium">{name}</p>
      <p className="text-md font-bold">{value}</p>
      <p
        className={`text-sm font-semibold ${
          isPositive ? "text-green-400" : "text-red-400"
        }`}
      >
        {isPositive ? `+${percent}%` : `${percent}%`}
      </p>
    </div>
  );
};

export default function TopBar() {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white border-b-amber-50 shadow-md">
      {/* Left Section (Logo + Menu) */}
      <Menu />

      {/* Right Section (Indices) */}
      <div className="flex gap-4">
        <IndexCard name="NIFTY 50" value={19700.25} percent={0.65} />
        <IndexCard name="SENSEX" value={66000.8} percent={-0.25} />
      </div>
    </div>
  );
}
