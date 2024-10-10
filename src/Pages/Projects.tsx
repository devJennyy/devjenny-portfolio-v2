import useScrollToTop from "../hooks/useScrollToTop";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { separatorLineStyles } from "../styles/styles";
import projectOverviewData from "../data/projectOverviewData";
import projectDetailsData from "../data/projectDetailsData";

const headingText = "Some things I've Built";
const Projects = () => {
  useScrollToTop();
  return (
    <div className="flex flex-col w-full gap-14 p-14">
      <div className="flex justify-start items-center gap-20">
        <p className="font-semibold text-3xl">{headingText}</p>
        <div className={`max-w-[15.5rem] w-full h-[2px] ${separatorLineStyles}`}></div>
      </div>

      <div className="grid grid-cols-3 gap-5">
  {projectOverviewData.map((project, index) => (
    <div
      key={index}
      className="flex flex-col text-left max-w-[20rem] w-full h-full bg-lightGray/10 border border-transparent dark:hover:border-gradient-azureBlue hover:border-secondary rounded-xl p-4"
    >
      <Link 
        to={project.projectUrl}
        state={{ data: projectDetailsData[project.dataIndex] }}
      >
        <img
          src={project.lightImageUrl}
          alt={`${project.projectName} light mode image`}
          className="w-full h-56 object-cover rounded-xl dark:hidden"
        />
        <img
          src={project.darkImageUrl}
          alt={`${project.projectName} dark mode image`}
          className="w-full h-56 object-cover rounded-xl hidden dark:block"
        />
      </Link>

      <div className="flex justify-between items-end w-full mt-4">
        <div className="flex flex-col gap-[2px] ml-1">
          <p className="text-sm text-tertiary dark:text-primaryDark dark:opacity-85 tracking-wide">
            {project.title}
          </p>
          <p className="font-medium text-[15px] dark:text-primaryDark tracking-wide">
            {project.projectName}
          </p>
        </div>
        {project.githubUrl && (
          <a target="_blank"
            href={project.githubUrl}
            className="text-secondary dark:text-primaryDark mb-[3px]"
          >
            <FaGithub size={17} />
          </a>
        )}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Projects;
