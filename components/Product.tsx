import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface Option {
  price: number;
  id: string;
  title: string;
}

interface ProductProps {
  product: {
    name: string;
    options: Option[];
    imageUrl: StaticImageData;
  };
  handleBuySystem: (option: Option) => void;
}

const Product: React.FC<ProductProps> = ({ product, handleBuySystem }) => {
  const { name, options, imageUrl } = product;
  const [selectedOption, setSelectedOption] = useState<Option>();

  const handleSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find((option) => option.id === e.target.value);
    setSelectedOption(selected!);
  };

  return (
    <div className="border border-gray-700 p-4 mx-4 rounded-md shadow-md shadow-indigo-600 hover:shadow-lg transition duration-500 transform hover:scale-95">
      <div className="relative aspect-w-1 aspect-h-1 mb-4">
        <Image
          src={imageUrl}
          alt={name}
          className="h-[200px] px-2 object-contain rounded-md"
          priority
        />
      </div>
      <div className="flex flex-col w-full px-2">
        <h3 className="text-md font-semibold mb-2 text-white">{name}</h3>
        <label className="text-gray-300 mb-2">Select Option:</label>
        <select
          className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-gray-300 appearance-none"
          value={selectedOption?.id}
          onChange={handleSelectOption}
        >
          <option
            className="bg-gray-800 text-gray-400 hover:bg-gray-700"
            value=""
          >
            Select an option
          </option>
          {options.map((option, index) => (
            <option
              className="bg-gray-800 text-gray-400 hover:bg-gray-700"
              key={index}
              value={option.id}
            >
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => handleBuySystem(selectedOption!)}
        className="bg-blue-500 text-white px-6 py-2 rounded-full mt-2 hover:scale-95 transition-all duration-500 w-full"
      >
        Buy
      </button>
    </div>
  );
};

export default Product;
