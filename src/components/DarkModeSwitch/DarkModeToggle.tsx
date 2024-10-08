import React from "react";
import "./DarkModeToggle.css";
import { useDarkMode } from "../../hooks/useDarkMode";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div data-bg-change>
      <div className={`toggle daynight small ${darkMode ? 'checked' : ''}`}>
        <input
          id="knobState-dns"
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <label htmlFor="knobState-dns" className="knob w-32 h-32"></label>
      </div>
    </div>
  );
};

export default DarkModeToggle;
