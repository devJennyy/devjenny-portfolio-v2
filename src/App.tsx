import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <>
      <div className="flex justify-center items-start w-full h-full gap-8 pt-56 px-32">
        <div className="flex flex-col w-full max-w-[27.5rem] h-full rounded-2.5xl gap-8">
          <div className="w-full h-[27.5rem] bg-white rounded-2.5xl"></div>
          <div className="w-full h-[12.5rem] bg-white rounded-2.5xl"></div>
        </div>
        <div className="w-full h-full bg-white rounded-tr-2.5xl rounded-tl-2.5xl"></div>
        <div className="flex flex-col justify-center items-center w-full max-w-[5rem] gap-8">
          <DarkModeToggle/>
          <div className="w-full h-[24.7rem] bg-white rounded-2.5xl"></div>
        </div>
      </div>
    </>
  );
}

export default App;
