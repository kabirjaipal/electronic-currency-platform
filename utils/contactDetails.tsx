import { AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TbBrandGmail } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

export default [
  {
    title: "Email",
    info: "contact@example.com",
    link: "mailto:contact@example.com",
    icon: <TbBrandGmail size={40} className="mx-auto text-indigo-400" />,
  },
  {
    title: "Phone",
    info: "+1 123-456-7890",
    link: "tel:+11234567890",
    icon: <AiOutlinePhone size={40} className="mx-auto text-indigo-400" />,
  },
  {
    title: "Location",
    info: "123 Main Street, Cityville",
    icon: <CiLocationOn size={40} className="mx-auto text-indigo-400" />,
  },
  {
    title: "Twitter",
    info: "@YourTwitterHandle",
    link: "https://twitter.com/YourTwitterHandle",
    icon: <AiOutlineTwitter size={40} className="mx-auto text-indigo-400" />,
  },
  {
    title: "LinkedIn",
    info: "Your LinkedIn Profile",
    link: "https://www.linkedin.com/in/yourlinkedinprofile",
    icon: <FaLinkedinIn size={40} className="mx-auto text-indigo-400" />,
  },
];
