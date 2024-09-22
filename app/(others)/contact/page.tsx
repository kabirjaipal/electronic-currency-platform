"use client";
import React from "react";
import Heading from "@/components/Heading";
import ContactForm from "@/components/ContactForm";
import MyLocation from "@/components/MyLocation";
import { MyFormData } from "@/types";
import toast from "react-hot-toast";

const ContactUsPage: React.FC = () => {
  const handleSubmit = (formData: MyFormData) => {
    console.log(formData);
    toast.success("Your message has been sent!", { duration: 5000 });
  };

  return (
    <section className="w-full bg-gradient-to-tr from-gray-950 to-slate-950">
      <div className="md:p-10 px-4 md:px-8 pb-4 text-center">
        <Heading
          title="Contact Us"
          className="md:text-5xl text-4xl mb-8 mt-4 md:mt-0"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location */}
          <div className="bg-gray-800 rounded-md py-6 text-center shadow-sm shadow-indigo-600">
            <MyLocation />
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-md py-6 text-center shadow-sm shadow-indigo-600">
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
