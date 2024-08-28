import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import WorkExperience from "./Pages/WorkExperience";
import SidebarLayout from "./layouts/SidebarLayout/SidebarLayout";
import ProfileOverview from "./layouts/ProfileLayout/ProfileOverview ";

function App() {
  return (
    <Router>
      <div className="max-w-[1920px] mx-auto w-full h-full pt-48 px-32">
        <div className="flex justify-between items-start w-full h-full gap-8">
          <ProfileOverview />
          <div className="w-full h-full bg-white dark:bg-secondaryDark rounded-tr-2.5xl rounded-tl-2.5xl p-8">
            <Routes>
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/work-experience" element={<WorkExperience />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
          <SidebarLayout />
        </div>
      </div>
    </Router>
  );
}

export default App;
