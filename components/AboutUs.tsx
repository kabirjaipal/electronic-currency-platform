import React from "react";
import Heading from "./Heading";

const aboutUsData = [
  {
    imageSrc: "https://source.unsplash.com/400x300/?team",
    alt: "Team",
    title: "Who We Are",
    description:
      "We are a passionate team dedicated to providing you with the best electronic products and services. Our mission is to make your online shopping experience enjoyable and hassle-free.",
  },
  {
    imageSrc: "https://source.unsplash.com/400x300/?vision",
    alt: "Vision",
    title: "Our Vision",
    description:
      "Our vision is to be a leading platform that offers a wide range of high-quality electronic products. We strive to innovate and bring cutting-edge technology to your doorstep.",
  },
  {
    imageSrc: "https://source.unsplash.com/400x300/?technology",
    alt: "Technology",
    title: "Technology Driven",
    description:
      "Embracing the latest in technology, we curate our products to meet the ever-evolving needs of our customers. Explore our range of products and stay ahead in the digital world.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-950 to-slate-950 py-10 px-4 md:px-0">
      <div className="container mx-auto text-center">
        <Heading
          title="About Us"
          className="font-bold md:text-5xl text-4xl mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {aboutUsData.map((item, index) => (
            <div
              key={index}
              className="mb-8 py-8 px-2 rounded-md md:px-8 md:py-12 md:mb-0"
            >
              <img
                src={item.imageSrc}
                alt={item.alt}
                className="w-full h-40 object-cover mb-4 rounded-md shadow-md"
              />
              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
