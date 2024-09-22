import contactDetails from "@/utils/contactDetails";
import React from "react";
import Heading from "./Heading";

const Socials: React.FC = () => {
  return (
    <section
      id="socials"
      className="w-full bg-gradient-to-tr from-gray-950 to-slate-950"
    >
      <div className="container mx-auto p-4 text-center py-10">
        <Heading title="Contact Us" className="md:text-5xl text-4xl mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-md py-2 text-center cursor-pointer shadow-md shadow-indigo-600 hover:shadow-lg transition duration-500 transform hover:scale-95"
            >
              {contact.icon}
              <h2 className="text-xl font-semibold text-indigo-400 mt-4">
                {contact.title}
              </h2>
              <a
                {...(contact.link === "" ? {} : { href: contact.link })}
                className="text-gray-300 hover:text-indigo-400"
                target={contact.link === "" ? "" : "_blank"}
                rel="noopener noreferrer"
              >
                {contact.info}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
