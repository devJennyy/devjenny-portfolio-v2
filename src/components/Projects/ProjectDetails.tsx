import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { gradientTextStyles } from "../../styles/styles";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const ProjectDetails = ( {data} : Props) => {
  return (
    <div className="flex flex-col items-center w-full pt-14 pb-16 gap-6">
      <div className="py-2 px-5 w-fit border border-secondary dark:border-primaryDark rounded-full">
        <p className="text-secondary dark:text-primaryDark text-sm">
          {data.tag}
        </p>
      </div>
      <div className="max-w-[42.5rem] w-full font-medium text-4xl text-center leading-snug">
        <p>
          {data.title}
          <span className={`text-secondary dark:${gradientTextStyles}`}>
            {" "}
            {data.subtitle}
          </span>
        </p>
      </div>
      <div className="max-w-[38rem] w-full text-center text-primary/50 dark:text-primaryDark/70 mt-2">
        <p>
          {data.description}
        </p>
      </div>
      <div className="flex items-center relative px-20">
        <button className="flex justify-center items-center w-11 h-11 bg-secondary/40 dark:bg-midnightBlue/40 rounded-xl absolute left-10">
          <MdOutlineArrowBack size={18} className="text-white" />
        </button>
        <div className="w-full relative">
          <img
            src="/images/mockup-screen.png"
            alt="Mockup Screen Light"
            className="w-full h-auto dark:hidden"
          />
          <img
            src="/images/mockup-screen-dark.png"
            alt="Mockup Screen Dark"
            className="w-full h-auto hidden dark:block"
          />
          <div className="absolute inset-0 bottom-0 max-w-[57rem] w-full h-[30rem] mx-auto mt-[5.8rem]">
            <img
              src={data.images}
              className="w-full h-full object-contain rounded-b-[10px]"
            />
          </div>
        </div>
        <button className="flex justify-center items-center w-11 h-11 bg-secondary/80 dark:bg-midnightBlue rounded-xl absolute right-10">
          <MdOutlineArrowForward size={18} className="text-white" />
        </button>
      </div>
      <div className="max-w-[38rem] w-full text-center text-primary/50 dark:text-primaryDark/70 mt-2">
        <p>
          These are the top 5 features of the web application. To explore the
          full application, feel free to visit my
          <a target="_blank"
            href={data.githubLink}
            className={`text-secondary dark:${gradientTextStyles} font-medium ml-1 hover:underline-offset-4 hover:underline`}
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default ProjectDetails
