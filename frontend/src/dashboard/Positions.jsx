import React from "react";
import { positions } from "./data/data";

const Positions = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 tracking-wide">
        Positions <span className="text-gray-500">({positions.length})</span>
      </h3>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
        <table className="w-full border-collapse bg-white text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wider">
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">Instrument</th>
              <th className="py-3 px-4 text-center">Qty.</th>
              <th className="py-3 px-4 text-center">Avg.</th>
              <th className="py-3 px-4 text-center">LTP</th>
              <th className="py-3 px-4 text-center">P&amp;L</th>
              <th className="py-3 px-4 text-center">Chg</th>
              <th className="py-3 px-4 text-center">Day</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {positions.map((stock, index) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-600" : "text-red-600";
              const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";

              return (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-3 px-4 font-medium text-gray-700">
                    {stock.product}
                  </td>
                  <td className="py-3 px-4 text-gray-800">{stock.name}</td>
                  <td className="py-3 px-4 text-center text-gray-600">
                    {stock.qty}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600">
                    {stock.price.toFixed(2)}
                  </td>
                  <td
                    className={`py-3 px-4 text-center font-semibold ${profClass}`}
                  >
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`py-3 px-4 text-center ${profClass}`}>
                    {stock.net}
                  </td>
                  <td className={`py-3 px-4 text-center ${dayClass}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
