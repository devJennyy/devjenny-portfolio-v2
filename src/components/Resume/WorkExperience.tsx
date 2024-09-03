import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";
import { gradientTextStyles, separatorLineStyles } from "../../styles/styles";

const WorkExperience = () => {
  const headingText = "Resume";

  const currentWorkData = {
    position: "FRONT-END DEVELOPER",
    jobType: "Part-Time Job",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timeframe: "Dec 2023 - Aug 2022",
    techUsed: "ReactJS, Typescript, TailwindCSS, Javascript",
  };

  return (
    <div className="flex flex-col w-full gap-14">
      <div className="flex justify-start items-center gap-20">
        <p className="font-semibold text-3xl">{headingText}</p>
        <div
          className={`max-w-[15.5rem] w-full h-[2px] ${separatorLineStyles}`}
        ></div>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-center w-full max-w-[23rem] h-[455px] gap-16">
          <div className="flex flex-col font-semibold text-[2rem] leading-[2.7rem]">
            <p className="text-primary dark:text-primaryDark">Where</p>
            <p className="text-primary dark:text-primaryDark">
              I’ve
              <span
                className={`ml-2 text-secondary dark:${gradientTextStyles}`}
              >
                Worked
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex items-end gap-2">
              <p className="font-semibold text-[2rem] leading-[1.5rem] dark:text-primaryDark">
                02
              </p>
              <p className="font-bold text-primary/30 font-raleway leading-[15px] dark:text-primaryDark/60">
                /
              </p>
              <p className="font-semibold text-primary/40 leading-[15px] dark:text-primaryDark/60">
                03
              </p>
            </div>

            <div className="flex gap-4">
              <button className="flex justify-center items-center w-11 h-11 bg-secondary/40 dark:bg-midnightBlue/40 rounded-xl">
                <MdOutlineArrowBack size={18} className="text-white" />
              </button>
              <button className="flex justify-center items-center w-11 h-11 bg-secondary/80 dark:bg-midnightBlue rounded-xl">
                <MdOutlineArrowForward size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="dark:gradient-flat w-full h-[455px] rounded-[2rem]">
          <div className="w-full h-full border-secondary border dark:border-none rounded-[2rem] gradient-background-two">
            <div className="flex flex-col justify-between h-full p-10">
              <div className="flex flex-col">
                <p className="text-tertiary dark:text-primaryDark">
                  {currentWorkData.jobType}
                </p>
                <p
                  className={`font-semibold text-[2rem] text-secondary dark:${gradientTextStyles}`}
                >
                  {currentWorkData.position}
                </p>
                <p className="text-[15px] mt-5">
                  {currentWorkData.description}
                </p>
              </div>
              <div className="flex gap-16">
                <div className="flex flex-col gap-4">
                  <p
                    className={`font-semibold text-lg text-secondary dark:${gradientTextStyles}`}
                  >
                    TIMEFRAME
                  </p>
                  <p className="text-[15px]">{currentWorkData.timeframe}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p
                    className={`font-semibold text-lg text-secondary dark:${gradientTextStyles}`}
                  >
                    TECH USED
                  </p>
                  <p className="text-[15px]">{currentWorkData.techUsed}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 pt-10">
            <div className="w-3 h-3 rounded-full bg-secondary/30"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <div className="w-3 h-3 rounded-full bg-secondary/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
