import React from "react";
import { TbLocationFilled } from "react-icons/tb";

const contactDetails = [
  {
    icon: <img src="/icon/email-icon.svg" alt="Email Icon" />,
    label: "Email Address",
    value: "devjenny.official@gmail.com",
  },
  {
    icon: <TbLocationFilled size={20} />,
    label: "Location",
    value: "Somewhere in the Philippines",
  },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-col justify-between w-full h-[12.5rem] bg-white dark:bg-secondaryDark rounded-2.5xl px-10 py-7">
      {contactDetails.map(({ icon, label, value }) => (
        <div
          key={label}
          className="flex justify-start items-center gap-5 h-[4rem]"
        >
          <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-secondary opacity-80 text-white">
            {icon}
          </div>
          <div className="flex flex-col justify-between h-full py-2">
            <p className="text-sm opacity-50">{label}</p>
            <p className="font-medium">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
