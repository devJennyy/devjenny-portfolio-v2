import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { separatorLineStyles } from "../../styles/styles";

const headingText = "Some things I've Built";

const projectData = [
  {
    title: "Thesis Project",
    projectName: "Event Management System",
    lightImageUrl: "/images/wmsu-cce.png",
    darkImageUrl: "/images/wmsu-cce-dark.png",
    githubUrl: "https://github.com/devJennyy/cce-wmsu",
    projectUrl: "/thesis-project",
  },
  {
    title: "Ecommerce Website",
    projectName: "Shop Online",
    lightImageUrl: "/images/shop-online.png",
    darkImageUrl: "/images/shop-online-dark.png",
    githubUrl: "https://github.com/devJennyy/shop-online",
    projectUrl: "/ecommerce-website",
  },
  {
    title: "Managing & Tracking App",
    projectName: "Finance App",
    lightImageUrl: "/images/finance-app.png",
    darkImageUrl: "/images/finance-app-dark.png",
    projectUrl: "/finance-app",
  },
  {
    title: "Anime Library",
    projectName: "Kwaii-Verse",
    lightImageUrl: "/images/kwaii-verse.png",
    darkImageUrl: "/images/kwaii-verse-dark.png",
    githubUrl: "https://github.com/devJennyy/kawaii-verse",
    projectUrl: "/anime-library",
  },
  {
    title: "Managing Website",
    projectName: "JumpStart",
    lightImageUrl: "/images/jumpstart.png",
    darkImageUrl: "/images/jumpstart-dark.png",
    githubUrl: "https://github.com/devJennyy/jumpstart",
    projectUrl: "/managing-website",
  },
  {
    title: "Fun Project",
    projectName: "Messaging App",
    lightImageUrl: "/images/messaging-app.png",
    darkImageUrl: "/images/messaging-app-dark.png",
    githubUrl: "https://github.com/devJennyy/messaging-app",
    projectUrl: "/fun-project/messaging-app",
  },
  {
    title: "Fun Project",
    projectName: "Spotify Clone",
    lightImageUrl: "/images/spotify-clone.png",
    darkImageUrl: "/images/spotify-clone-dark.png",
    githubUrl: "https://github.com/devJennyy/spotify-clone",
    projectUrl: "/fun-project/spotify-clone",
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
          <Link
            key={index}
            to={project.projectUrl}
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
              {project.githubUrl && (
                <a href={project.githubUrl} className="text-secondary dark:text-primaryDark mb-[3px]">
                  <FaGithub size={17} />
                </a>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
