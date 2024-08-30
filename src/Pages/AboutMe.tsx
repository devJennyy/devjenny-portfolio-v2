import AboutMeSection from "../components/AboutMe/AboutMe";
import Hero from "../components/AboutMe/Hero";
import ServicesSection from "../components/AboutMe/Services";
import Footer from "../components/Footer";
import SocialLogos from "../components/SocialLogos";

const AboutMe = () => {
  return (
    <a href="about-me" className="w-full">
      <Hero />
      <AboutMeSection/>
      <ServicesSection/>
      <SocialLogos/>
      <Footer/>
    </a>
  );
};

export default AboutMe;
