import { Link } from "react-router-dom";
import DarkModeToggle from "../../components/DarkModeSwitch/DarkModeToggle";

const iconData = [
  {
    page: "/about-me",
    light: "/icon/about-me-icon.svg",
    dark: "/icon/about-me-dark-icon.svg",
    alt: "About Me",
    size: "h-[25px] w-[25px]",
  },
  {
    page: "/resume",
    light: "/icon/work-experience-icon.svg",
    dark: "/icon/work-experience-dark-icon.svg",
    alt: "Work Experience",
    size: "h-7 w-7",
  },
  {
    page: "/projects",
    light: "/icon/project-icon.svg",
    dark: "/icon/project-dark-icon.svg",
    alt: "Projects",
    size: "h-[30px] w-[30px]",
  },
  {
    page: "/contact",
    light: "/icon/contact-two-icon.svg",
    dark: "/icon/contact-dark-icon.svg",
    alt: "Contact",
    size: "h-[26px] w-[26px]",
  },
];

const SidebarLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[5rem] gap-8">
      <DarkModeToggle />

      <div className="dark:gradient w-full border-transparent border-y-[0.5px] border-x rounded-2.5xl dark:border-none">
        <div className="w-full h-[24.7rem] bg-white dark:bg-secondaryDark rounded-2.5xl gradient-background">
          <div className="flex flex-col justify-between items-center h-full py-9">
            {iconData?.map((icon, index) => (
              <Link key={index} className={icon.size} to={`${icon.page}`}>
                <img
                  src={icon.light}
                  alt={icon.alt}
                  className="w-full h-full dark:hidden"
                />
                <img
                  src={icon.dark}
                  alt={icon.alt}
                  className="w-full h-full hidden dark:block"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
