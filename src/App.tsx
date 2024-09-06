import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import SidebarLayout from "./layouts/SidebarLayout/SidebarLayout";
import ProfileOverview from "./layouts/ProfileLayout/ProfileOverview ";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import ThesisProject from "./components/Projects/ThesisProject";
import ShopOnline from "./components/Projects/ShopOnline";
import FinanceApp from "./components/Projects/FinanceApp";
import KwaiiVerse from "./components/Projects/KwaiiVerse";
import JumpStart from "./components/Projects/JumpStart";
import MessagingApp from "./components/Projects/MessagingApp";
import SpotifyClone from "./components/Projects/SpotifyClone";

function App() {
  
  return (
    <Router>
      <div className="max-w-[1920px] mx-auto w-full pt-48 px-32 bg-lightmode dark:bg-darkmode">
        <div className="flex justify-between items-start w-full h-full gap-8">
          <div className="sticky top-[12rem] self-start">
            <ProfileOverview />
          </div>
          <div className="dark:gradient-two w-full">
            <div className="w-full h-full bg-white dark:bg-secondaryDark rounded-tr-2.5xl rounded-tl-2.5xl gradient-background border-transparent border-y-[0.5px] border-x dark:border-none">
              <Routes>
                <Route path="/" element={<Navigate to="/about-me" replace />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thesis-project" element={<ThesisProject />} />
                <Route path="/shop-online" element={<ShopOnline />} />
                <Route path="/finance-app" element={<FinanceApp />} />
                <Route path="/kwaii-verse" element={<KwaiiVerse />} />
                <Route path="/jumpstart" element={<JumpStart />} />
                <Route path="/messaging-app" element={<MessagingApp />} />
                <Route path="/spotify-clone" element={<SpotifyClone />} />
              </Routes>
            </div>
          </div>
          <div className="sticky top-[12rem] self-start">
            <SidebarLayout />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
