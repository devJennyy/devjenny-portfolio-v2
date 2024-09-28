import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import SocialLogos from "../SocialLogos";
import Footer from "../Footer";

const ThesisProject = () => {
  return (
    <div
      id="thesis-project"
      className="flex flex-col items-center w-full pt-14 pb-16 gap-6"
    >
      <div className="py-2 px-5 w-fit border border-secondary rounded-full">
        <p className="text-secondary text-sm">Thesis Project</p>
      </div>
      <div className="max-w-[42.5rem] w-full font-medium text-4xl text-center leading-snug">
        <p>
          Western Mindanao State University Center of Continuing Education Event
          <span className="text-secondary">Management System</span>
        </p>
      </div>
      <div className="max-w-[38rem] w-full text-center text-primary/50 mt-2">
        <p>
          A web application designed to offer training programs and reviews to
          both university clients and external customers, while also managing
          events for Western Mindanao State University Center of Continuing
          Education. The application enables users to create and update events,
          invite speakers, and send attendance QR codes via email.
        </p>
      </div>
      <div className="flex items-center relative px-20">
        <button className="flex justify-center items-center w-11 h-11 bg-secondary/40 dark:bg-midnightBlue/40 rounded-xl absolute left-10">
          <MdOutlineArrowBack size={18} className="text-white" />
        </button>
        <div className="w-full relative">
          <img
            src="/images/mockup-screen.png"
            alt="Mockup Screen"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bottom-0 max-w-[56rem] w-full h-[29.4rem] mx-auto mt-[6.3rem]">
            <img
              src="/images/wmsu-cce/admin-dashboard.png"
              alt="Admin Dashboard"
              className="w-full h-full object-contain rounded-b-[10px]"
            />
          </div>
        </div>
        <button className="flex justify-center items-center w-11 h-11 bg-secondary/80 dark:bg-midnightBlue rounded-xl absolute right-10">
          <MdOutlineArrowForward size={18} className="text-white" />
        </button>
      </div>
      <div className="max-w-[38rem] w-full text-center text-primary/50 mt-2">
        <p>
          These are the top 5 features of the web application. To explore the
          full application, feel free to visit my 
          <span className="text-secondary"> GitHub</span>.
        </p>
      </div>
    </div>
  );
};

export default ThesisProject;
