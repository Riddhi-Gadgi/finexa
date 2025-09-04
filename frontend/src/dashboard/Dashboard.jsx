import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import "../index.css";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Left: Main content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <GeneralContextProvider>
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            {/* <Route path="/apps" element={<Apps />} /> */}
          </Routes>
        </GeneralContextProvider>
      </div>

      {/* Right: WatchList (fixed width) */}
      <GeneralContextProvider>
        {" "}
        <div className="w-110 border-l border-gray-300 p-4 bg-gray-50 overflow-y-auto">
          <WatchList />
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;
