// Products.tsx
"use client";
import React, { useState, useEffect, useCallback } from "react";
import Product from "./Product";
import productsList from "@/utils/productsList";
import TransactionCloud from "@/utils/TranscationCloud";
import toast from "react-hot-toast";
import Heading from "./Heading";

interface Option {
  price: number;
  id: string;
  title: string;
}

interface ProductsProps {
  length?: number;
}

const Products: React.FC<ProductsProps> = ({ length }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState(productsList);

  useEffect(() => {
    const filteredProducts = productsList
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, length);

    setProducts(filteredProducts);
  }, [searchTerm, length]);

  const handleBuySystem = useCallback(async (option: Option) => {
    if (!option) {
      return toast.error("Please select a product to buy", { duration: 5000 });
    }
    const tc = new TransactionCloud();

    try {
      console.log("option", option);
      console.log("You bought a product!");
      const product = await tc.getProduct(option.id);

      if (!product) {
        return toast.error("Product not found", { duration: 5000 });
      }

      console.log("product", product);

      if (product) {
        const response = await tc.buy(product.id);
        console.log("response", response);
      }
    } catch (error) {
      toast.error(String(error), { duration: 5000 });
      console.error("Error during purchase:", error);
    }
  }, []);

  return (
    <section className="mt-8 pb-10">
      <header className="mb-6 text-center">
        <Heading
          title={`${length ? "Featured" : ""} Products`}
          className="md:text-5xl text-4xl mb-4"
        />
      </header>

      {/* Search bar */}
      {length == undefined && (
        <div className="mb-10 flex justify-center w-full">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-3 border border-indigo-600 bg-transparent outline-none rounded-md w-full text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {/* Display products or message */}
      {products.length === 0 ? (
        <p className="text-center text-indigo-600 text-2xl font-bold">
          No products found for "{searchTerm}".
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4">
          {products.map((product) => (
            <Product
              key={product.name}
              product={product}
              handleBuySystem={handleBuySystem}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
