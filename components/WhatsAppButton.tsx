import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Replace with your actual phone number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-10 z-50 bottom-10 bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
