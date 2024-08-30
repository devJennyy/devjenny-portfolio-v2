import { gradientTextStyles } from "../../styles/styles";

const ServicesSection = () => {
  return (
    <div className="flex flex-col w-full mt-24">
      <p className="font-semibold text-3xl">What I Do</p>
      <div className="flex justify-between w-full h-[26.5rem] mt-12 gap-3">
        <div className="w-full h-full bg-secondary/50 dark:bg-navyBlue/50 text-white dark:text-primaryDark p-7">
          <div className="flex flex-col items-center w-full h-full pt-12">
            <div className="w-14 h-14">
              <img src="/icon/ui-designer-icon.svg" className="w-full h-full" />
            </div>
            <div className="mt-10">
              <p className={`font-bold text-2xl dark:${gradientTextStyles}`}>
                UI Design
              </p>
            </div>
            <div className="max-w-[12rem] w-full h-[10rem] text-center mt-5">
              <p className="font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div
              className={`flex justify-end items-end font-medium text-xl ${gradientTextStyles}`}
            >
              <p>10 Projects</p>
            </div>
          </div>
        </div>
        <div className="dark:gradient-flat w-full h-full">
          <div className="w-full h-full border-[2px] border-secondary/50 dark:border-none gradient-background-flat text-primary p-7">
            <div className="flex flex-col items-center w-full h-full pt-12">
              <div className="w-14 h-14">
                <img
                  src="/icon/ui-designer-icon.svg"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between items-center h-full">
                <div className={`text-center mt-10 dark:${gradientTextStyles}`}>
                  <p className="font-bold text-2xl">
                    Front-end <span>Development</span>
                  </p>
                </div>
                <div
                  className={`flex justify-end items-end font-medium text-xl dark:${gradientTextStyles}`}
                >
                  <p>5 Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-secondary/50 dark:bg-navyBlue/50 text-white dark:text-primaryDark p-7">
          <div className="flex flex-col items-center w-full h-full pt-12">
            <div className="w-14 h-14">
              <img src="/icon/ui-designer-icon.svg" className="w-full h-full" />
            </div>
            <div className="mt-10">
              <p className={`font-bold text-2xl dark:${gradientTextStyles}`}>
                UX Design
              </p>
            </div>
            <div className="max-w-[12rem] w-full h-[10rem] text-center mt-5">
              <p className="font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div
              className={`flex justify-end items-end font-medium text-xl ${gradientTextStyles}`}
            >
              <p>10 Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
