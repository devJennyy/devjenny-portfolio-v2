import Hero from "../components/Contact/Hero";
import Footer from "../components/Footer";
import SocialLogos from "../components/SocialLogos";
import useScrollToTop from "../hooks/useScrollToTop";

const Contact = () => {
  useScrollToTop();
  return (
    <div id="contact" className="w-full">
      <div className="p-14">
        <Hero />
        <SocialLogos />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
