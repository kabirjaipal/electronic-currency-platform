import React from "react";
import Heading from "./Heading";

const Hero = () => {
  return (
    <div className="text-white bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 py-20 md:py-28">
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
        <Heading
          title="electronic stocks"
          className="md:text-5xl text-4xl mb-4"
        />
        <p className="text-sm md:text-lg mb-8">
          💸 We provide you with the buying and selling of the electronic stocks
          💱
        </p>
        <a
          href="/products"
          className="text-white border border-indigo-400 px-6 py-3 rounded-full text-lg font-semibold inline-block"
        >
          Explore Products
        </a>
      </div>
    </div>
  );
};

export default Hero;
