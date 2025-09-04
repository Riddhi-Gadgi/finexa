import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
const API_URL = import.meta.env.VITE_API_URL;
const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/allHoldings`).then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: [
          "#FF4D4D",
          "#FF944D",
          "#FFD24D",
          "#4DFF4D",
          "#4D94FF",
          "#B84DFF",
          "#FF6EC7",
          "#00FFE5",
          "#FFA500",
          "#8A2BE2",
        ],
        borderColor: [
          "#FF4D4D",
          "#FF944D",
          "#FFD24D",
          "#4DFF4D",
          "#4D94FF",
          "#B84DFF",
          "#FF6EC7",
          "#00FFE5",
          "#FFA500",
          "#8A2BE2",
        ],
        borderWidth: 2,
        hoverBackgroundColor: [
          "#FF7F7F",
          "#FFB266",
          "#FFE066",
          "#80FF80",
          "#80B3FF",
          "#C266FF",
          "#FF99CC",
          "#66FFFF",
          "#FFB84D",
          "#B366FF",
        ],
        hoverBorderWidth: 3,
      },
    ],
  };

  return (
    <div className="p-6 space-y-8">
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800">
        Holdings ({allHoldings.length})
      </h3>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-3 px-4 text-left">Instrument</th>
              <th className="py-3 px-4 text-center">Qty.</th>
              <th className="py-3 px-4 text-center">Avg. cost</th>
              <th className="py-3 px-4 text-center">LTP</th>
              <th className="py-3 px-4 text-center">Cur. val</th>
              <th className="py-3 px-4 text-center">P&amp;L</th>
              <th className="py-3 px-4 text-center">Net chg.</th>
              <th className="py-3 px-4 text-center">Day chg.</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
            {allHoldings.map((stock, index) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-600" : "text-red-600";
              const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";

              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{stock.name}</td>
                  <td className="py-3 px-4 text-center">{stock.qty}</td>
                  <td className="py-3 px-4 text-center">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {stock.price.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {currVal.toFixed(2)}
                  </td>
                  <td
                    className={`py-3 px-4 text-center font-medium ${profClass}`}
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-5 text-center">
          <h5 className="text-xl font-bold text-gray-800">
            29,875.<span className="text-base">55</span>
          </h5>
          <p className="text-gray-500 text-sm mt-1">Total investment</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-5 text-center">
          <h5 className="text-xl font-bold text-gray-800">
            31,428.<span className="text-base">95</span>
          </h5>
          <p className="text-gray-500 text-sm mt-1">Current value</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-5 text-center">
          <h5 className="text-xl font-bold text-green-600">
            1,553.40 <span className="text-sm text-green-500">(+5.20%)</span>
          </h5>
          <p className="text-gray-500 text-sm mt-1">P&amp;L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </div>
  );
};

export default Holdings;
