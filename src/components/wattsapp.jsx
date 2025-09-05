import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923020784810"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default WhatsAppButton;
