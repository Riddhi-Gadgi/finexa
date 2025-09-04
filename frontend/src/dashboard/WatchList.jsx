import React, { useState } from "react";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "./data/data";
import { DoughnutChart } from "./DoughnoutChart";
import GeneralContext from "./GeneralContext";
import { useContext } from "react";

const WatchList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const data = {
    labels: filteredWatchlist.map((subArray) => subArray.name),
    datasets: [
      {
        label: "Price",
        data: filteredWatchlist.map((stock) => stock.price),
        backgroundColor: [
          "#FF4D4DAA",
          "#FF944DAA",
          "#FFD24DAA",
          "#4DFF4DAA",
          "#4D94FFAA",
          "#B84DFFAA",
        ],
        borderColor: [
          "#FF4D4D",
          "#FF944D",
          "#FFD24D",
          "#4DFF4D",
          "#4D94FF",
          "#B84DFF",
        ],
        borderWidth: 4,
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-md">
      {/* Search Bar */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="ml-3 text-xs text-gray-400">
          {filteredWatchlist.length} / {watchlist.length}
        </span>
      </div>

      {/* Watchlist Items */}
      <ul className="space-y-2">
        {filteredWatchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      className="flex flex-col bg-gray-800 rounded-lg p-3 transition hover:bg-gray-700"
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="flex items-center justify-between">
        {/* Stock Name */}
        <p className={stock.isDown ? "text-red-400" : "text-green-400"}>
          {stock.name}
        </p>

        {/* Stock Info */}
        <div className="flex items-center space-x-2">
          <span
            className={`text-sm font-medium ${
              stock.isDown ? "text-red-400" : "text-green-400"
            }`}
          >
            {stock.percent}%
          </span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-400" />
          ) : (
            <KeyboardArrowUp className="text-green-400" />
          )}
          <span className="text-gray-300 font-semibold">{stock.price}</span>
        </div>
      </div>

      {/* Hover Actions */}
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <div className="flex space-x-3 mt-2">
      <Tooltip title="Buy " placement="top" arrow TransitionComponent={Grow}>
        <button
          className="ml-4 px-36 py-1.5 rounded-md bg-purple-500 hover:bg-purple-600 text-white text-sm font-bold"
          onClick={() => generalContext.openBuyWindow(uid)}
        >
          Buy
        </button>
      </Tooltip>

      {/* <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm font-bold">
          Sell
        </button>
      </Tooltip> */}

      {/* <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="px-3 py-1 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-bold">
          <BarChartOutlined fontSize="small" />
        </button>
      </Tooltip> */}

      {/* <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="px-4 py-1 rounded-md bg-gray-600 hover:bg-gray-700 text-white">
          <MoreHoriz fontSize="small" />
        </button>
      </Tooltip> */}
    </div>
  );
};
