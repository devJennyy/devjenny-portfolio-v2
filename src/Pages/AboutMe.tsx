import AboutMeSection from "../components/AboutMe/AboutMe";
import Hero from "../components/AboutMe/Hero";
import ServicesSection from "../components/AboutMe/Services";
import Footer from "../components/Footer";
import SocialLogos from "../components/SocialLogos";

const AboutMe = () => {
  return (
    <div id="about-me" className="w-full">
      <div className="p-14">
        <Hero />
        <AboutMeSection />
        <ServicesSection />
        <SocialLogos />
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
