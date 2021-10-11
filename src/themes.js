import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
export const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
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
  const [mytheme, setTheme] = useState("light");
  return { mytheme, setTheme };
}

const stheme = Theme();
export const theme = stheme.mytheme,
  settheme = stheme.setTheme;


  
export const themeToggler = (theme, setTheme) => {
  theme === "light" ? setTheme("dark") : setTheme("light");
};
