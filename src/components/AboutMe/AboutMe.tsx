import { RiReactjsLine } from "react-icons/ri";
import { separatorLineStyles, gradientTextStyles } from "../../styles/styles";

const techStacks = [
  { name: "ReactJS", icon: <RiReactjsLine size={21} /> },
  { name: "TypeScript", icon: <RiReactjsLine size={21} /> },
  { name: "JavaScript", icon: <RiReactjsLine size={21} /> },
  { name: "TailwindCSS", icon: <RiReactjsLine size={21} /> },
  { name: "Strapi", icon: <RiReactjsLine size={21} /> },
  { name: "HTML", icon: <RiReactjsLine size={21} /> },
  { name: "CSS5", icon: <RiReactjsLine size={21} /> },
];

const aboutMeContent = {
  title: "About Me",
  description: [
    "Hi! I’m Jenny. I’m a Frontend Developer and UI/UX Designer based in the Philippines. My journey in web development began in 2021 when I was assigned to be a UI/UX Designer for a software development project. This experience sparked my interest in web development.",
    "While in college, I started working as a freelance UI/UX Designer to improve my skills. I then transitioned to Frontend Development, taking commissions for websites from small businesses and student thesis projects to further enhance my expertise. While awaiting graduation, I landed my first part-time job as a Frontend Developer, working remotely on outsourced projects.",
    "As a Frontend Developer, I am passionate about crafting solutions that not only meet client needs but also inspire users. I thrive on the challenge of creating innovative and user-friendly websites that make a meaningful impact.",
  ],
};

const AboutMeSection = () => {
  return (
    <div className="flex flex-col w-full mt-24">
      <div className="flex justify-start items-center gap-20">
        <p className="font-semibold text-3xl">{aboutMeContent.title}</p>
        <div
          className={`max-w-[15.5rem] w-full h-[2px] ${separatorLineStyles}`}
        ></div>
      </div>
      <div className="flex justify-between mt-10 w-full">
        <div className="flex justify-center items-center max-w-[38.5rem] w-full bg-lightCoral dark:bg-midnightBlue p-12 relative">
          <div className="absolute top-6 left-6">
            <img src="/icon/quotation-icon.svg" className="dark:hidden" />
            <img
              src="/icon/quotation-dark-icon.svg"
              className="dark:block hidden"
            />
          </div>
          <div className="flex flex-col gap-5 text-white dark:text-primaryDark tracking-wide text-justify">
            {aboutMeContent.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col max-w-[15rem] w-full gap-5">
          <p
            className={`font-semibold text-2xl text-secondary dark:${gradientTextStyles}`}
          >
            Tech Stacks
          </p>
          <div className="flex flex-col gap-2">
            {techStacks?.map((stack, index) => (
              <div
                key={index}
                className="dark:gradient-flat bg-secondary/10 w-full h-[3.1rem] rounded-xl"
              >
                <div className="flex justify-start items-center px-2 w-full h-full gradient-background-flat rounded-xl gap-3">
                  <div className="flex justify-center items-center w-9 h-9 bg-secondary/80 dark:bg-midnightBlue rounded-lg text-white dark:text-primaryDark">
                    {stack.icon}
                  </div>
                  <p
                    className={`font-medium text-sm text-primary dark:${gradientTextStyles}`}
                  >
                    {stack.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
