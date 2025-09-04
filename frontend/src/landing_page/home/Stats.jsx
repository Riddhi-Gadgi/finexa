import React from "react";

function Stats() {
  return (
    <section className="container mx-auto px-24 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Trust with confidence
          </h3>

          <div className="space-y-6">
            {[
              {
                title: "Customer-first always",
                desc: "That's why 1.3+ crore customers trust Finexa with ₹3.5+ lakh crores worth of equity investments.",
              },
              {
                title: "No spam or gimmicks",
                desc: "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like.",
              },
              {
                title: "The Finexa universe",
                desc: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
              },
              {
                title: "Do better with money",
                desc: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-3 h-5 mt-1 rounded-full bg-fuchsia-600"></span>
                <div>
                  <h5 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center gap-6">
          <img
            src="media/Images/ecosystem.png"
            alt="Ecosystem"
            className="max-w-xs md:max-w-sm rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
            <a
              href="#"
              className="text-fuchsia-600 hover:text-fuchsia-700 transition"
            >
              Explore our Products →
            </a>
            <a
              href="#"
              className="text-fuchsia-600 hover:text-fuchsia-700 transition"
            >
              Try Kite demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
