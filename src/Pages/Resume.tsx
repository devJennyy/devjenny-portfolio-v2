
import Footer from "../components/Footer";
import Education from "../components/Resume/Education";
import WorkExperience from "../components/Resume/WorkExperience";
import SocialLogos from "../components/SocialLogos";

const Resume = () => {
  return (
    <div id="resume" className="w-full">
      <div className="p-14">
        <WorkExperience />
        <Education />
        <SocialLogos />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
