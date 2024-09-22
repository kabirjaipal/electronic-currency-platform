"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import bitCoinLogo from "./../assets/bitcoin.png";
import Link from "next/link";
import navlinksDetails from "@/utils/navlinksDetails";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navlinksDetails[0].name);

  const handleCloseMobileMenu = (name: string) => {
    setMobileMenuOpen(false);
    setActiveLink(name);
  };

  return (
    <div className="bg-gray-800 h-max">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href={"/"} className="flex items-center">
              <img
                className="h-12 w-auto"
                src={bitCoinLogo.src}
                alt="Your Company"
              />
            </a>
          </div>
          <div className="hidden sm:flex space-x-4">
            {navlinksDetails.map((item) => (
              <Link
                key={item.name}
                onClick={() => handleCloseMobileMenu(item.name)}
                href={item.href}
                className={classNames(
                  activeLink.toLowerCase() === item.name.toLowerCase()
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "px-3 py-2 rounded-md text-md font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <FaTimes className="block" size={30} aria-hidden="true" />
              ) : (
                <FaBars className="block" size={30} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navlinksDetails.map((item) => (
              <Link
                key={item.name}
                onClick={() => handleCloseMobileMenu(item.name)}
                href={item.href}
                className={classNames(
                  activeLink.toLowerCase() === item.name.toLowerCase()
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
