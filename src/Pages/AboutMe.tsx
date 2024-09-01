import Hero from "../components/AboutMe/Hero";
import Services from "../components/AboutMe/Services";
import Footer from "../components/Footer";
import SocialLogos from "../components/SocialLogos";
import ProfileOverview from "../components/AboutMe/ProfileOverview";

const AboutMe = () => {
  return (
    <div id="about-me" className="w-full">
      <div className="p-14">
        <Hero />
        <ProfileOverview/>
        <Services />
        <SocialLogos />
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
