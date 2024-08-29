import AboutMeSection from "../components/AboutMe/AboutMeSection";
import Hero from "../components/AboutMe/Hero";
import ServicesSection from "../components/AboutMe/ServicesSection";

const AboutMe = () => {
  return (
    <a href="about-me" className="w-full">
      <Hero />
      <AboutMeSection/>
      <ServicesSection/>
    </a>
  );
};

export default AboutMe;
