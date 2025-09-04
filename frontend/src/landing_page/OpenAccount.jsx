import React from "react";

function OpenAccount() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Open a Finexa account
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        {/* CTA Button */}
        <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transition">
          Sign up for free
        </button>
      </div>
    </section>
  );
}

export default OpenAccount;
