import React from "react";
import { Twitter, Linkedin, Youtube } from "lucide-react"; // Lucide icons
import logo from "/media/Images/Finexa.png";
function Footer() {
  const companyLinks = [
    "About",
    "Products",
    "Pricing",
    "Referral programme",
    "Careers",
    "Finexa.tech",
    "Opensource",
    "Press & media",
    "Finexa Cares (CSR)",
  ];

  const supportLinks = [
    "Contact us",
    "Support portal",
    "Z-Connect blog",
    "List of charges",
    "Downloads & resources",
    "Videos",
    "Market overview",
    "How to file a complaint?",
    "Status of your complaints",
  ];

  const accountLinks = ["Open an account", "Fund transfer"];

  return (
    <footer className="mt-10 border-t-fuchsia-900 border-white border-8   text-gray-700">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <img src={logo} alt="logo" className="w-36 mb-3" />
            <p className="text-sm text-gray-500 mb-3">
              © 2010 - 2025, Finexa Broking Ltd. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-500">
              <a href="#" className="hover:text-blue-500">
                <Twitter size={20} strokeWidth={1.8} />
              </a>
              <a href="#" className="hover:text-blue-700">
                <Linkedin size={20} strokeWidth={1.8} />
              </a>
              <a href="#" className="hover:text-red-600">
                <Youtube size={20} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold mb-3">Company</h5>
            <ul className="space-y-1 text-sm">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold mb-3">Support</h5>
            <ul className="space-y-1 text-sm">
              {supportLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h5 className="font-semibold mb-3">Account</h5>
            <ul className="space-y-1 text-sm">
              {accountLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-10 border-t pt-6 text-xs text-gray-500 space-y-4 leading-relaxe bg-amber-50">
          <p>
            Finexa Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Finexa
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Finexa Commodities Pvt. Ltd. MCX: 46025; NSE-50001 -
            SEBI Registration no.: INZ000038238 Registered Address: Finexa
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@Finexa.com, for DP related to dp@Finexa.com.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </a>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Finexa and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
