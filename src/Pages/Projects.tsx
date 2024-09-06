import Hero from "../components/Projects/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const Projects = () => {
  useScrollToTop();
  return (
    <div id="projects" className="w-full">
      <div className="p-14">
        <Hero />
      </div>
    </div>
  );
};

export default Projects;
