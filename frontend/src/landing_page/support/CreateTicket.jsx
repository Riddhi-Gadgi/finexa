import React from "react";
import {
  User,
  PlusCircle,
  Signal,
  CreditCard,
  Chrome,
  CircleDashed,
} from "lucide-react";

export default function CreateTicket() {
  const categories = [
    {
      title: "Account Opening",
      icon: <PlusCircle className="w-5 h-5 text-fuchsia-600" />,
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Finexa Account",
      icon: <User className="w-5 h-5 text-fuchsia-600" />,
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) & DP",
        "Nomination",
        "Transfer & conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: <Signal className="w-5 h-5 text-fuchsia-600" />,
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF)",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: <CreditCard className="w-5 h-5 text-fuchsia-600" />,
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: <Chrome className="w-5 h-5 text-fuchsia-600" />,
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: <CircleDashed className="w-5 h-5 text-fuchsia-600" />,
      links: [
        "Understanding mutual funds and Coin",
        "Coin app",
        "Coin web",
        "Transactions and reports",
        "National Pension Scheme (NPS)",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        To create a ticket, select a relevant topic
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-6 border border-gray-100"
          >
            <h4 className="flex items-center gap-2 font-semibold text-lg text-gray-800 mb-4">
              {cat.icon} {cat.title}
            </h4>
            <ul className="space-y-2">
              {cat.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-fuchsia-600 hover:underline text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
