import { gradientTextStyles, separatorLineStyles } from "../../styles/styles";

const aboutMeData = {
  mainButton: {
    text: "Hire Me",
    icon: {
      light: "/icon/upright-icon.svg",
      dark: "/icon/upright-dark-icon.svg",
    },
  },
  roles: [{ text: "UI/UX" }, { text: "DESIGNER" }],
  roleDescription: "Creative UI/UX Designer",
  description:
    "Whether you’re looking for a website redesign or a mobile app interface, I’m here to help bring your ideas to life. Let’s work together to create something amazing!",
};

const Hero = () => {
  return (
    <a href="about-me" className="w-full">
      <div className="uppercase cursor-default">
        <p className="font-medium text-2xl ml-2">Hello, I am Jenny</p>
        <div className="text-[5.7rem] tracking-[7px] leading-[8rem]">
          <div className="flex justify-start items-center gap-10">
            <p className="font-semibold">Experience</p>
            <div className="flex justify-center items-center max-w-[16rem] w-full h-[4.6rem] rounded-full bg-secondary gap-3 gradient-background-flat dark:btn dark:btn-gradient-border dark:btn-glow">
              <p
                className={`font-medium text-3xl tracking-widest cursor-pointer ${gradientTextStyles}`}
              >
                {aboutMeData.mainButton.text}
              </p>
              <div className="h-5 w-5">
                <img
                  src={aboutMeData.mainButton.icon.light}
                  className="w-full h-full dark:hidden"
                />
                <img
                  src={aboutMeData.mainButton.icon.dark}
                  className="w-full h-full dark:block hidden"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-7 font-semibold">
            <p className="text-secondary opacity-85 dark:opacity-100 dark:text-primaryDark dark:bg-gradient-to-r from-gradient-lavenderMist via-gradient-aquaGlow to-gradient-fuchsiaBlaze dark:bg-clip-text dark:text-transparent">
              {aboutMeData.roles[0].text}
            </p>
            <p className="text-primary dark:text-primaryDark">
              {aboutMeData.roles[1].text}
            </p>
          </div>
        </div>

        <div className={`w-full h-[1px] ${separatorLineStyles}`}></div>

        <div className="flex justify-between">
          <p className="font-semibold text-xl uppercase tracking-widest dark:bg-gradient-to-r from-gradient-lavenderMist via-gradient-aquaGlow to-gradient-fuchsiaBlaze dark:bg-clip-text dark:text-transparent">
            {aboutMeData.roleDescription}
          </p>
          <div className="max-w-[24rem] w-full normal-case text-justify">
            <p>{aboutMeData.description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Hero;
