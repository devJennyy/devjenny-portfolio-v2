import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import SidebarLayout from "./layouts/SidebarLayout/SidebarLayout";
import ProfileOverview from "./layouts/ProfileLayout/ProfileOverview ";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="max-w-[1920px] mx-auto w-full pt-48 px-32 bg-lightmode dark:bg-darkmode">
        <div className="flex justify-between items-start w-full h-full gap-8">
          <ProfileOverview />
          <div className="dark:gradient-two w-full">
            <div className="w-full h-full bg-white dark:bg-secondaryDark rounded-tr-2.5xl rounded-tl-2.5xl p-14 pb-48 gradient-background border-transparent border-y-[0.5px] border-x dark:border-none">
              <Routes>
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
          <SidebarLayout />
        </div>
      </div>
    </Router>
  );
}

export default App;
