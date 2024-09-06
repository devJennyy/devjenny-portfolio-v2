import Hero from "../components/Contact/Hero";
import Footer from "../components/Footer";
import SocialLogos from "../components/SocialLogos";

const Contact = () => {
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
