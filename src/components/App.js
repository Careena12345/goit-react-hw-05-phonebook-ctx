import React from "react";
import ThemeSelector from "./ThemeSelector";
import PhoneBookPage from "./PhoneBookPage";
import ThemeContext from "../context/ThemeContext";

const App = toggleTheme => (
  <ThemeContext>
    <ThemeSelector toggleTheme={toggleTheme} />
    <PhoneBookPage />
  </ThemeContext>
);

export default App;
