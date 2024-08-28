import ContactDetails from "./ContactDetails";
import SocialLinks from "./SocialLinks";


const ProfileOverview = () => {
  const profileImage = "/images/jenny-pieloor.png";
  const contactIcon = "/icon/contact-icon.svg";

  return (
    <div className="flex flex-col w-full max-w-[27.5rem] rounded-2.5xl gap-8">
      <div className="flex flex-col justify-end items-center w-full h-[27.5rem] bg-white dark:bg-secondaryDark rounded-2.5xl p-10 relative">
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

        <div className="flex items-center w-full gap-3 text-[12px] tracking-wide font-medium text-white cursor-pointer mt-2">
          <div className="flex justify-center items-center h-12 w-full bg-secondary opacity-80 rounded-lg gap-2">
            <img src={contactIcon} className="h-4" alt="Contact Icon" />
            <p>Hire Me</p>
          </div>
          <div className="flex justify-center items-center h-12 w-full bg-secondary opacity-80 rounded-lg gap-2">
            <p>Download CV</p>
          </div>
        </div>
      </div>

      <ContactDetails />
    </div>
  );
};

export default ProfileOverview;
