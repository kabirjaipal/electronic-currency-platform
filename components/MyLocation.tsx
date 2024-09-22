import React from "react";

const MyLocation: React.FC = () => {
  return (
    <div className="w-full px-2">
      <h2 className="text-2xl md:text-3xl text-gray-200 font-bold mb-4">
        Location
      </h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-[50vh] rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1389630.2387076516!2d35.92239711809926!3d-8.017524609159619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18541a0f3b75bdb5%3A0xb20d2a9f8eaf2d9a!2sKilimahewa%2C%20Tanzania!5e0!3m2!1sen!2sin!4v1709613644894!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MyLocation;
