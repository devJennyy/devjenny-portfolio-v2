import { FaGithub } from "react-icons/fa";
import { separatorLineStyles } from "../../styles/styles";

const headingText = "Some things I've Built";

const projectData = [
  {
    title: "Thesis Project",
    projectName: "Event Management System",
    lightImageUrl: "/images/wmsu-cce.png",
    darkImageUrl: "/images/wmsu-cce-dark.png",
    githubUrl: "https://github.com/devJennyy/cce-wmsu",
    projectUrl: "https://your-project-url.com/event-management-system",
  },
  {
    title: "Ecommerce Website",
    projectName: "Shop Online",
    lightImageUrl: "/images/shop-online.png",
    darkImageUrl: "/images/shop-online-dark.png",
    githubUrl: "https://github.com/devJennyy/shop-online",
    projectUrl: "https://your-project-url.com/shop-online",
  },
  {
    title: "Managing & Tracking App",
    projectName: "Finance App",
    lightImageUrl: "/images/finance-app.png",
    darkImageUrl: "/images/finance-app-dark.png",
    projectUrl: "https://your-project-url.com/finance-app",
  },
  {
    title: "Anime Library",
    projectName: "Kwaii-Verse",
    lightImageUrl: "/images/kwaii-verse.png",
    darkImageUrl: "/images/kwaii-verse-dark.png",
    githubUrl: "https://github.com/devJennyy/kawaii-verse",
    projectUrl: "https://your-project-url.com/messaging-app",
  },
  {
    title: "Managing Website",
    projectName: "JumpStart",
    lightImageUrl: "/images/jumpstart.png",
    darkImageUrl: "/images/jumpstart-dark.png",
    githubUrl: "https://github.com/devJennyy/jumpstart",
    projectUrl: "https://your-project-url.com/jumpstart",
  },
  {
    title: "Fun Project",
    projectName: "Messaging App",
    lightImageUrl: "/images/messaging-app.png",
    darkImageUrl: "/images/messaging-app-dark.png",
    githubUrl: "https://github.com/devJennyy/messaging-app",
    projectUrl: "https://your-project-url.com/messaging-app",
  },
  {
    title: "Fun Project",
    projectName: "Spotify Clone",
    lightImageUrl: "/images/spotify-clone.png",
    darkImageUrl: "/images/spotify-clone-dark.png",
    githubUrl: "https://github.com/devJennyy/spotify-clone",
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
            <img
              src={project.lightImageUrl}
              alt={`${project.projectName} lightmode image`}
              className="w-full h-56 object-cover rounded-xl dark:hidden"
            />
            <img
              src={project.darkImageUrl}
              alt={`${project.projectName} darkmode image`}
              className="w-full h-56 object-cover rounded-xl hidden dark:block"
            />

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
                {project.githubUrl && (
                  <a href={project.githubUrl} className="text-secondary dark:text-primaryDark">
                    <FaGithub size={17} />
                  </a>
                )}
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
