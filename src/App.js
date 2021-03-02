import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./Styles/GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

import Nav from './Components/Nav/index'
import Main from "./Components/Main/index.js";
import Spech from "./Components/Main-Specs/index.js";

export const App = (props) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark")
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Nav toggleTheme={toggleTheme} theme={theme} />
        
        <Main />

        <Spech />

        <GlobalStyles />
    </ThemeProvider>
  );
}



export default App;
