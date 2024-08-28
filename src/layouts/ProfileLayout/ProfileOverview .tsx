import SocialLinks from "./SocialLinks";
import ContactDetails from "./ContactDetails";
import {
  FaDownload as FaDownloadIcon,
  FaWhatsapp as FaWhatsappIcon,
} from "react-icons/fa";

const profileImage = "/images/jenny-pieloor.png";
const DownloadIcon = <FaDownloadIcon size={13} className="mb-[1px]" />;
const WhatsappIcon = <FaWhatsappIcon size={19} className="mb-[1px]" />;

const ProfileOverview = () => {
  return (
    <div className="flex flex-col w-full max-w-[27.5rem] rounded-2.5xl gap-8">
      <div className="dark:gradient">
        <div className="flex flex-col justify-end items-center w-full h-[27.5rem] bg-white gradient-background rounded-2.5xl p-10 relative">
          <div
            className="max-w-[13rem] w-full h-[12rem] rounded-2.5xl bg-no-repeat object-cover absolute top-[-5rem]"
            style={{ backgroundImage: `url(${profileImage})` }}
          ></div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="font-semibold text-[1.63rem]">Jenelyn Pieloor</p>
            <p className="font-medium text-sm opacity-60 dark:opacity-85">
              Front-End Developer
            </p>
          </div>

          <SocialLinks />

          <div className="flex items-center w-full gap-3 text-[13px] tracking-wide font-medium cursor-pointer mt-2">
            <button className="flex justify-center items-center h-12 w-full bg-secondary opacity-80 rounded-lg gap-2 dark:btn dark:btn-gradient-border dark:btn-glow text-white dark:text-primaryDark dark:opacity-100">
              {WhatsappIcon}
              <p>Contact Me</p>
            </button>
            <button className="flex justify-center items-center h-12 w-full bg-secondary opacity-80 rounded-lg gap-2 dark:btn dark:btn-gradient-border dark:btn-glow text-white dark:text-primaryDark dark:opacity-100">
              {DownloadIcon}
              <p>Download CV</p>
            </button>
          </div>
        </div>
      </div>

      <ContactDetails />
    </div>
  );
};

export default ProfileOverview;
