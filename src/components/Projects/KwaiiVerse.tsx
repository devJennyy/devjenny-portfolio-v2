import { useLocation } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";


const KwaiiVerse = () => {
  const location = useLocation();
  const { data } = location.state || {};
  return <ProjectDetails data={data} />;
};

export default KwaiiVerse
