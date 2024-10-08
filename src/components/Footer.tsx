const footerText = {
  creator: "Designed and developed by Jenny Pieloor",
  yearCreated: "2024",
};

const backgroundImage = {
  dark: "/images/footer-bg-dark.svg",
  light: "/images/footer-bg.svg",
};

const Footer = () => {
  return (
    <div className="w-full relative">
      <div className="absolute bottom-0 left-0 z-0 w-full">
        <img
          src={backgroundImage.light}
          className="w-full h-auto dark:hidden"
        />
        <img
          src={backgroundImage.dark}
          className="w-full h-auto dark:block hidden"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full text-[12px] gap-1 relative z-10 py-4 text-secondary/80 font-medium dark:text-primaryDark/80">
        <p>{footerText.creator}</p>
        <p>{footerText.yearCreated}</p>
      </div>
    </div>
  );
};

export default Footer;
