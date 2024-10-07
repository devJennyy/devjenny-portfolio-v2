import useScrollToTop from "../hooks/useScrollToTop";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { separatorLineStyles } from "../styles/styles";

const headingText = "Some things I've Built";
const projectDescriptionData = [
  {
    tag: "Thesis Project",
    title: "Western Mindanao State University Center of Continuing Education Event",
    subtitle: "Management System",
    description: "A web application designed to offer training programs and reviews to both university clients and external customers, while also managing events for the Western Mindanao State University Center of Continuing Education. The platform allows users to create and update events, join and subscribe to events, invite speakers, send attendance QR codes via email, and generate certificates.",
    images: ["/images/wmsu-cce/image-one.png", "/images/wmsu-cce/image-two.png", "/images/wmsu-cce/image-three.png", "/images/wmsu-cce/image-four.png", "/images/wmsu-cce/image-five.png"],
    githubLink: "https://github.com/devJennyy/cce-wmsu",
  },
  {
    tag: "Ecommerce Website",
    title: "Shop",
    subtitle: "Online",
    description: "A full frontend e-commerce website made in ReactJS, TailwindCSS, Typescript to create a modern online shopping experience. I integrated additional libraries such as ShadCN for enhanced user interface components, aceternity for other features, and EmblaCarousel for seamless product image carousels",
    images: [""],
    githubLink: "https://github.com/devJennyy",
    figmaLink: "https://github.com/devJennyy",
  },
  {
    tag: "Expense Tracker",
    title: "Finance",
    subtitle: "App",
    description: "A mobile finance application designed to help users effectively manage their finances. It enables users to track their monthly salary records, daily expenses, savings, and overall balance. The app features three different account types: a solo account for individuals, a couple account that allows partners to view and share each other's balances, savings, and expenses, and a family account that enables families to collaboratively manage finances, with the ability to see each member's balance, savings, and expenses. With its intuitive interface, the app makes financial management straightforward and accessible for everyone.",
    images: [""],
  },
  {
    tag: "Anime Library",
    title: "Kawaii -",
    subtitle: "Verse",
    description: "",
    images: [""],
    githubLink: "https://github.com/devJennyy",
  },
  {
    tag: "Managing Website",
    title: "Jump",
    subtitle: "Start",
    description: "",
    images: [""],
    githubLink: "https://github.com/devJennyy",
  },
  {
    tag: "Fun Project",
    title: "Messaging",
    subtitle: "App",
    description: "",
    images: [""],
    githubLink: "https://github.com/devJennyy",
  },
  {
    tag: "Fun Project",
    title: "Spotify Clone",
    subtitle: "App",
    description: "",
    images: [""],
    githubLink: "https://github.com/devJennyy",
  },
 
];

const projectData = [
  {
    title: "Thesis Project",
    projectName: "Event Management System",
    lightImageUrl: "/images/wmsu-cce.png",
    darkImageUrl: "/images/wmsu-cce-dark.png",
    githubUrl: "https://github.com/devJennyy/cce-wmsu",
    projectUrl: "/thesis-project",
    dataIndex: 0,
  },
  {
    title: "Ecommerce Website",
    projectName: "Shop Online",
    lightImageUrl: "/images/shop-online.png",
    darkImageUrl: "/images/shop-online-dark.png",
    githubUrl: "https://github.com/devJennyy/shop-online",
    projectUrl: "/shop-online",
    dataIndex: 1,
  },
  {
    title: "Managing & Tracking App",
    projectName: "Finance App",
    lightImageUrl: "/images/finance-app.png",
    darkImageUrl: "/images/finance-app-dark.png",
    projectUrl: "/finance-app",
    dataIndex: 2,
  },
  {
    title: "Anime Library",
    projectName: "Kwaii-Verse",
    lightImageUrl: "/images/kwaii-verse.png",
    darkImageUrl: "/images/kwaii-verse-dark.png",
    githubUrl: "https://github.com/devJennyy/kawaii-verse",
    projectUrl: "/kwaii-verse",
    dataIndex: 3,
  },
  {
    title: "Managing Website",
    projectName: "JumpStart",
    lightImageUrl: "/images/jumpstart.png",
    darkImageUrl: "/images/jumpstart-dark.png",
    githubUrl: "https://github.com/devJennyy/jumpstart",
    projectUrl: "/jumpstart",
    dataIndex: 4,
  },
  {
    title: "Fun Project",
    projectName: "Messaging App",
    lightImageUrl: "/images/messaging-app.png",
    darkImageUrl: "/images/messaging-app-dark.png",
    githubUrl: "https://github.com/devJennyy/messaging-app",
    projectUrl: "/messaging-app",
    dataIndex: 5,
  },
  {
    title: "Fun Project",
    projectName: "Spotify Clone",
    lightImageUrl: "/images/spotify-clone.png",
    darkImageUrl: "/images/spotify-clone-dark.png",
    githubUrl: "https://github.com/devJennyy/spotify-clone",
    projectUrl: "/spotify-clone",
    dataIndex: 6,
  },
];
const Projects = () => {
  useScrollToTop();
  return (
    <div className="flex flex-col w-full gap-14 p-14">
      <div className="flex justify-start items-center gap-20">
        <p className="font-semibold text-3xl">{headingText}</p>
        <div className={`max-w-[15.5rem] w-full h-[2px] ${separatorLineStyles}`}></div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {projectData.map((project, index) => (
          <Link
            key={index}
            to={
              project.projectUrl
            }
            state={{data: projectDescriptionData[project.dataIndex]}}
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

export default Projects;
