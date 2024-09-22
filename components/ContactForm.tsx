"use client";
import { MyFormData } from "@/types";
import React, { useState } from "react";

interface ContactFormProps {
  onSubmit: (formData: MyFormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<MyFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const formFields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "message", label: "Message", type: "textarea", rows: 7 },
  ];

  return (
    <form className="px-4" onSubmit={(e) => e.preventDefault()}>
      <h2 className="text-2xl md:text-3xl text-gray-200 font-bold mb-4">
        Send us a message
      </h2>
      {formFields.map(({ id, label, type, rows }) => (
        <div key={id} className="mb-4">
          <label
            htmlFor={id}
            className="text-gray-300 block mb-1 text-left text-xl"
          >
            {label}
          </label>
          {type === "textarea" ? (
            <textarea
              id={id}
              name={id}
              value={formData[id as keyof MyFormData]} // Add type annotation for formData
              onChange={handleChange}
              className="w-full p-2 border border-indigo-600 bg-transparent text-white rounded-md outline-none"
              rows={rows}
              required
            />
          ) : (
            <input
              type={type}
              id={id}
              name={id}
              value={formData[id as keyof MyFormData]} // Add type annotation for formData
              onChange={handleChange}
              className="w-full p-2 border border-indigo-600 bg-transparent text-white rounded-md outline-none"
              required
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        onClick={() => onSubmit(formData)}
        className="bg-indigo-500 text-2xl text-white px-10 py-2 rounded-full hover:scale-95 transition-all duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
