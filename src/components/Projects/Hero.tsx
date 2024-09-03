import { FaGithub } from "react-icons/fa";
import { separatorLineStyles } from "../../styles/styles";

const headingText = "Some things I've Built";

const projectData = [
  {
    title: "Thesis Project",
    projectName: "Event Management System",
    imageUrl: "/images/image-placeholder.svg",
    githubUrl: "https://github.com/your-repo/event-management-system",
    projectUrl: "https://your-project-url.com/event-management-system",
  },
  {
    title: "Ecommerce Website",
    projectName: "Shop Online",
    imageUrl: "/images/image-placeholder.svg",
    githubUrl: "https://github.com/your-repo/shop-online",
    projectUrl: "https://your-project-url.com/shop-online",
  },
  {
    title: "Managing Application",
    projectName: "Finance App",
    imageUrl: "/images/image-placeholder.svg",
    githubUrl: "https://github.com/your-repo/finance-app",
    projectUrl: "https://your-project-url.com/finance-app",
  },
  {
    title: "Managing Website",
    projectName: "JumpStart",
    imageUrl: "/images/image-placeholder.svg",
    githubUrl: "https://github.com/your-repo/jumpstart",
    projectUrl: "https://your-project-url.com/jumpstart",
  },
  {
    title: "Fun Project",
    projectName: "Messaging App",
    imageUrl: "/images/image-placeholder.svg",
    githubUrl: "https://github.com/your-repo/messaging-app",
    projectUrl: "https://your-project-url.com/messaging-app",
  },
  {
    title: "Fun Project",
    projectName: "Spotify Clone",
    imageUrl: "/images/image-placeholder.svg",
    githubUrl: "https://github.com/your-repo/spotify-clone",
    projectUrl: "https://your-project-url.com/spotify-clone",
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col w-full gap-14">
      <div className="flex justify-start items-center gap-20">
        <p className="font-semibold text-3xl">{headingText}</p>
        <div className={`max-w-[15.5rem] w-full h-[2px] ${separatorLineStyles}`}></div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.projectUrl}
            className="flex flex-col text-left max-w-[20rem] w-full h-full bg-lightGray/10 border border-lightGray/0 dark:hover:border-gradient-azureBlue hover:border-secondary rounded-xl p-4"
          >
            <div className="w-full h-56 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${project.imageUrl})` }}></div>
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col gap-[2px] mt-4 ml-1">
                <p className="text-sm text-tertiary dark:text-primaryDark dark:opacity-85 tracking-wide">
                  {project.title}
                </p>
                <p className="font-medium text-[15px] dark:text-primaryDark tracking-wide">
                  {project.projectName}
                </p>
              </div>
              <div className="flex gap-2 mb-1">
                <a href={project.githubUrl} className="text-secondary dark:text-primaryDark">
                  <FaGithub size={17} />
                </a>
                <div className="h-1">
                  <img src="/icon/arrow-light.svg" className="dark:hidden" alt="arrow-light" />
                  <img src="/icon/arrow-dark.svg" className="dark:block hidden" alt="arrow-dark" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
