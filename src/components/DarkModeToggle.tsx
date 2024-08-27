import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded absolute right-10 top-10"
    >
      Click for magic!
    </button>
  );
};

export default DarkModeToggle;
