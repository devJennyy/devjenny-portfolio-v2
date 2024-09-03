import { TiLocation } from "react-icons/ti";
import { TbLocationFilled } from "react-icons/tb";
import { gradientTextStyles, separatorLineStyles } from "../../styles/styles";

const Education = () => {
  const locationIcon = <TiLocation size={25} className="z-25" />;
  const locationTwoIcon = <TbLocationFilled size={20} className="z-25" />;

  const contactDetails = [
    {
      icon: locationIcon,
      academicLevel: "College",
      schoolName: "Western Mindanao State University",
    },
    {
      icon: locationIcon,
      academicLevel: "Senior High School",
      schoolName: "Ayala National High School",
    },
    {
      icon: locationIcon,
      academicLevel: "Grade 8 - High School",
      schoolName: "Mary Immaculate Parish Special School",
    },
  ];

  const sectionTitle = "Education";
  const descriptionText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.";

  const imageUrl = {
    globeLight: "/images/globe.svg",
    globeDark: "/images/globe-dark.svg",
    schoolImage: "/images/wmsu-image-one.jpg",
  };

  const selectedSchool = "College of Computing Studies";

  return (
    <div className="flex w-full pt-48">
      <div className="flex flex-col gap-5 w-1/2">
        <p className="text-secondary dark:text-primaryDark font-semibold text-[2rem] leading-[2.7rem]">
          {sectionTitle}
        </p>
        <div className="max-w-[24rem] w-full">
          <p className="text-primary dark:text-primaryDark">
            {descriptionText}
          </p>
        </div>

        <div className="flex flex-col justify-between max-w-[25rem] w-full gap-8 mt-16">
          {contactDetails.map(({ icon, academicLevel, schoolName }) => (
            <div key={academicLevel}>
              <div className="flex justify-start items-center gap-5 pb-6">
                <div className="flex justify-center items-center w-11 h-11 rounded-xl bg-secondary dark:bg-tertiaryDark opacity-80 text-white dark:text-primaryDark dark:opacity-100 z-0">
                  {icon}
                </div>
                <div className="flex flex-col justify-between h-full gap-1">
                  <p className="text-sm text-tertiary dark:text-primaryDark dark:opacity-85 tracking-wide">
                    {academicLevel}
                  </p>
                  <p className={`font-medium text-[15px] dark:${gradientTextStyles}`}>
                    {schoolName}
                  </p>
                </div>
              </div>
              <div className={`max-w-full w-full h-[1px] bg-gray dark:${separatorLineStyles}`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-end gap-5 w-1/2">
        <div className="absolute z-0">
          <img src={imageUrl.globeLight} className="dark:hidden" />
          <img src={imageUrl.globeDark} className="dark:block hidden" />
        </div>
        <div className="text-secondary dark:text-primaryDark absolute right-[4rem]">
          {locationIcon}
        </div>

        <div className="relative flex justify-center items-center gap-7 w-full max-w-[22.9rem] mt-16 mr-[1.5rem] z-25">
          <div className="flex flex-col w-full h-[25rem] gap-7">
            <div className="max-w-[10.7rem] w-full h-1/2 dark:border border-primaryDark rounded-[2rem] z-0">
              <div
                className="w-full h-full rounded-[2rem] bg-cover bg-no-repeat relative"
                style={{ backgroundImage: `url(${imageUrl.schoolImage})` }}
              >
                <div className="flex justify-center items-center w-11 h-11 rounded-full dark:border border-primaryDark bg-secondary dark:bg-tertiaryDark text-white dark:text-primaryDark absolute bottom-[-1rem] left-[-1rem]">
                  {locationTwoIcon}
                </div>
              </div>
            </div>
            <div className="max-w-[10.7rem] w-full h-1/2 dark:border border-primaryDark rounded-[2rem] z-0">
              <div
                className="w-full h-full rounded-[2rem] bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${imageUrl.schoolImage})` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 w-full h-full">
            <div className="max-w-[10.7rem] w-full h-[14rem] dark:border border-primaryDark rounded-[2rem] z-0">
              <div
                className="w-full h-full rounded-[2rem] bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${imageUrl.schoolImage})` }}
              ></div>
            </div>

            <div className="flex justify-start items-start gap-2">
              <div className="text-secondary dark:text-primaryDark">
                {locationIcon}
              </div>
              <div className="leading-[14px]">
                <p className="font-medium text-sm">
                  {selectedSchool}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
