import React from "react";

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, className }) => {
  return (
    <h1
      className={`capitalize ${className} font-bold bg-gradient-to-r from-gray-600 via-indigo-600 to-zinc-600 inline-block text-transparent bg-clip-text`}
    >
      {title}
    </h1>
  );
};

export default Heading;
