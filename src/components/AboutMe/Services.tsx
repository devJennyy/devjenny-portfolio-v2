import { gradientTextStyles } from "../../styles/styles";

const servicesData = [
  {
    title: "UI Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    projects: "10 Projects",
    imgSrc: "/icon/ui-designer-icon.svg",
    isHighlighted: false,
  },
  {
    title: "Front-end Development",
    description: false,
    projects: "5 Projects",
    imgSrc: "/icon/ui-designer-icon.svg",
    isHighlighted: true,
  },
  {
    title: "UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    projects: "10 Projects",
    imgSrc: "/icon/ui-designer-icon.svg",
    isHighlighted: false,
  },
];

const ServicesSection = () => {
  return (
    <div className="flex flex-col w-full mt-24">
      <p className="font-semibold text-3xl">What I Do!</p>
      <div className="flex justify-between w-full h-[26.5rem] mt-12 gap-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`w-full h-full ${
              service.isHighlighted
                ? "dark:gradient-border border-[2px] border-secondary/50 dark:border-none text-primary"
                : "bg-secondary/50 dark:bg-navyBlue/50 text-white dark:text-primaryDark"
            } p-7`}
          >
            <div className="flex flex-col items-center w-full h-full pt-12">
              <div className="w-14 h-14">
                <img src={service.imgSrc} className="w-full h-full" alt={`${service.title} Icon`} />
              </div>
              <div className={`mt-10 ${service.isHighlighted ? "text-center dark:" + gradientTextStyles : ""}`}>
                <p className={`font-bold text-2xl ${service.isHighlighted ? "dark:" + gradientTextStyles : ""}`}>
                  {service.title}
                </p>
              </div>
              <div className="max-w-[12rem] w-full h-[10rem] text-center mt-5">
                <p className="font-normal">
                  {service.description}
                </p>
              </div>
              <div
                className={`flex justify-end items-end font-medium text-xl ${
                  service.isHighlighted ? "dark:" + gradientTextStyles : gradientTextStyles
                }`}
              >
                <p>{service.projects}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
