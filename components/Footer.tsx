import { legalLinks, socialMediaIcons } from "@/utils/footerDetails";
import React from "react";
import Heading from "./Heading";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center mb-4 md:mb-0 md:text-left">
          <Heading
            title="Electronic Currency"
            className="md:text-4xl text-3xl"
          />
          <p className="text-sm mt-2 text-gray-300">
            Your address, City, Country
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-4">
            {socialMediaIcons.map((socialMedia, index) => (
              <a
                key={index}
                href={socialMedia.href}
                className="text-indigo-500 hover:text-gray-400 transition duration-300"
              >
                {socialMedia.icon}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm hover:text-gray-400 transition duration-300"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
