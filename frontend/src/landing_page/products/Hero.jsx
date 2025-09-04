import React from "react";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="mt-16 container mx-auto max-w-3xl text-center py-20 px-6 bg-gray-50 rounded-2xl shadow-lg">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Finexa Products
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        Sleek, modern, and intuitive trading platforms
      </p>

      {/* CTA */}
      <a
        href="#"
        className="inline-flex items-center gap-3 text-fuchsia-600 font-semibold hover:text-fuchsia-700 transition-colors bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg"
      >
        Check out our investment offerings
        <ArrowRight className="w-5 h-5" />
      </a>
    </section>
  );
}

export default Hero;
