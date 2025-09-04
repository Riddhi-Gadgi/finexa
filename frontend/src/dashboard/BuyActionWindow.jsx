import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow, triggerOrdersRefresh } = useContext(GeneralContext);

  const handleBuyClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    if (!userId) {
      console.error("No userId found in localStorage");
      return;
    }

    const orderData = {
      userId,
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "buy",
    };

    axios
      .post("http://localhost:3002/newOrder", orderData)
      .then(() => {
        closeBuyWindow();
        triggerOrdersRefresh();
      })
      .catch((err) => console.error("Error creating order:", err));
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    // Overlay
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Modal */}
      <div className="bg-gray-900 text-white rounded-lg p-6 w-80 shadow-lg relative">
        <h2 className="text-lg font-bold mb-4">Buy {uid}</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Quantity</label>
            <input
              type="number"
              min={3}
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Price</label>
            <input
              type="number"
              // step={0.05}
              min={10}
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleCancelClick}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleBuyClick}
            className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
