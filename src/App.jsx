import { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import AppRoutes from "./routes/AppRoutes";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if dark mode is enabled
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <AppRoutes />

      <button
        type="button"
        className="theme-toggle-btn"
        onClick={toggleTheme}
      >
        <img
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          alt="Theme Toggle"
        />
      </button>
    </>
  );
}

export default App;
