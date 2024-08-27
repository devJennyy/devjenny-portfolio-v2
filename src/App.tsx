import {
  FaDownload,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import DarkModeToggle from "./components/DarkModeToggle";
import { TbLocationFilled } from "react-icons/tb";

const profileImage = "/images/jenny-pieloor.png";
const contactIcon = "/icon/contact-icon.svg";
const socialLinks = {
  whatsapp: {
    href: "https://wa.me/639627458011",
    icon: <FaWhatsapp size={22} />,
  },
  linkedin: {
    href: "https://www.linkedin.com/in/jennypieloor/",
    icon: <FaLinkedinIn size={22} />,
  },
  instagram: {
    href: "https://www.instagram.com/jnnyplr",
    icon: <FaInstagram size={20} />,
  },
  github: {
    href: "https://github.com/devJennyy",
    icon: <FaGithubAlt size={22} />,
  },
};
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

function App() {
  return (
    <>
      <div className="flex justify-center items-start w-full h-full gap-8 pt-48 px-32">
        {/* Profile Overview */}
        <div className="flex flex-col w-full max-w-[27.5rem] rounded-2.5xl gap-8">
          <div className="flex flex-col justify-end items-center w-full h-[27.5rem] bg-white rounded-2.5xl p-10 relative">
            <div
              className="max-w-[13rem] w-full h-[12rem] rounded-2.5xl bg-no-repeat object-cover absolute top-[-5rem]"
              style={{ backgroundImage: `url(${profileImage})` }}
            ></div>
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="font-semibold text-[1.63rem]">Jenelyn Pieloor</p>
              <p className="font-medium text-sm opacity-60">
                Front-End Developer
              </p>
            </div>
            <div className="flex flex-col gap-5 relative w-full my-9">
              <div className="faded-side-gradient"></div>
              <div className="flex justify-center items-center gap-11 text-secondary px-[5rem]">
                {Object.values(socialLinks)?.map(({ href, icon }) => (
                  <a key={href} href={href}>
                    {icon}
                  </a>
                ))}
              </div>
              <div className="faded-side-gradient"></div>
            </div>
            <div className="flex items-center w-full gap-3 text-[12px] tracking-wide font-medium text-white cursor-pointer mt-2">
              <div className="flex justify-center items-center h-12 w-full bg-secondary opacity-80 rounded-lg gap-2">
                <img src={contactIcon} className="h-4" alt="Contact Icon" />
                <p>Hire Me</p>
              </div>
              <div className="flex justify-center items-center h-12 w-full bg-secondary opacity-80 rounded-lg gap-2">
                <FaDownload size={13} className="text-white" />
                <p>Download CV</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-full h-[12.5rem] bg-white rounded-2.5xl px-10 py-7">
            {contactDetails?.map(({ icon, label, value }) => (
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
        </div>

        {/* Mid Container */}
        <div className="w-full h-full bg-white rounded-tr-2.5xl rounded-tl-2.5xl"></div>

        {/* Button */}
        <div className="flex flex-col justify-center items-center w-full max-w-[5rem] gap-8">
          <DarkModeToggle />
          <div className="w-full h-[24.7rem] bg-white rounded-2.5xl"></div>
        </div>
      </div>
    </>
  );
}

export default App;
