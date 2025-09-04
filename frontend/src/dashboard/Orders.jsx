import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
const API_URL = import.meta.env.VITE_API_URL;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { refreshOrders } = useContext(GeneralContext);

  const fetchOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id || localStorage.getItem("userId");

    if (!userId) {
      console.error("No userId found in localStorage");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(`${API_URL}/userOrders/${userId}`);
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchOrders();
  }, [refreshOrders]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <p className="text-gray-500">Loading orders...</p>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] bg-gray-50 px-4">
        <div className="text-center bg-white shadow-md rounded-2xl p-8 max-w-md w-full">
          <p className="text-gray-600 text-lg mb-6">
            You haven't placed any orders today
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-[70vh]">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Your Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600">Name</th>
              <th className="py-3 px-4 text-left text-gray-600">Qty</th>
              <th className="py-3 px-4 text-left text-gray-600">Price</th>
              <th className="py-3 px-4 text-left text-gray-600">Mode</th>
              <th className="py-3 px-4 text-left text-gray-600">User</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 px-4">{order.name}</td>
                <td className="py-3 px-4">{order.qty}</td>
                <td className="py-3 px-4">{order.price}</td>
                <td className="py-3 px-4">{order.mode}</td>
                <td className="py-3 px-4">
                  {order.user ? order.user.username : "N/A"}{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
