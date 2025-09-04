import React from "react";

function Brokerage() {
  const charges = [
    "Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.",
    "Digital contract notes will be sent via e-mail.",
    "Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.",
    "For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).",
    "For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).",
    "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.",
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-10 ">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Brokerage
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Detailed information about brokerage charges and services
        </p>
      </div>

      <div className=" grid-cols-1  gap-8  justify-center">
        {/* Brokerage Calculator Card */}
        <div className="bg-white shadow-xl  rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
          <a
            href="#"
            className="text-fuchsia-600 font-semibold text-lg hover:underline"
          >
            Brokerage Calculator
          </a>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base">
            {charges.map((charge, index) => (
              <li key={index}>{charge}</li>
            ))}
          </ul>
        </div>

        {/* List of Charges Card */}
        {/* <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-center items-start">
          <a href="#" className="text-fuchsia-600 font-semibold text-lg hover:underline mb-4">
            List of Charges
          </a>
          <p className="text-gray-600 text-sm md:text-base">
            Check the complete list of charges applicable for various services and transactions.
            Visit our website or contact support for detailed breakdowns.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Brokerage;
