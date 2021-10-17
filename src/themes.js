import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

export const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export const lightTheme = {
  body: "#E8FAFF",
  fontColor: "#000",
  nav :{ 
    "id":"nav",
    "background": "#000",
    "color":"#fff",
  }

};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",

};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;

export function Theme() {
  const [theme, setTheme] = useState("light");
  return { theme, setTheme };
}



export const themeToggler = (theme, setTheme) => {
  theme === "light" ? setTheme("dark") : setTheme("light");
};
