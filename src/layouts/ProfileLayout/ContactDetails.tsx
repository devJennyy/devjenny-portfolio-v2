import { HiEnvelope } from "react-icons/hi2";
import { TbLocationFilled } from "react-icons/tb";

const contactDetails = [
  {
    icon: <HiEnvelope size={20} className="z-25" />,
    label: "Email Address",
    value: "devjenny.official@gmail.com",
  },
  {
    icon: <TbLocationFilled size={20} className="z-25" />,
    label: "Location",
    value: "Somewhere in the Philippines",
  },
];

const ContactDetails = () => {
  return (
    <div className="dark:gradient border-transparent border-y-[0.5px] border-x rounded-2.5xl dark:border-none">
      <div className="flex flex-col justify-between w-full h-[12.5rem] bg-white gradient-background rounded-2.5xl px-10 py-7">
        {contactDetails?.map(({ icon, label, value }) => (
          <div
            key={label}
            className="flex justify-start items-center gap-5 h-[4rem]"
          >
            <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-secondary dark:bg-tertiaryDark opacity-80 text-white dark:text-primaryDark dark:opacity-100 z-0">
              {icon}
            </div>
            <div className="flex flex-col justify-between h-full py-[10px]">
              <p className="text-sm text-tertiary dark:text-primaryDark dark:opacity-85 tracking-wide">{label}</p>
              <p className="font-medium text-[15px]">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
