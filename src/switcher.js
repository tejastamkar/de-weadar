import React from "react";
import "./Switcher.scss";

export function Switcher() {
  const [colorTheme, setColortheme] = React.useState("blue");
  React.useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");

    if (currentThemeColor) {
      setColortheme(currentThemeColor);
    }
  }, []);
  const handleClick = (theme) => {
    setColortheme(theme);
    localStorage.setItem("theme-color", theme);
  };
  function sets() {
      return(
    <div id="theme-opt">
      <div id="blue" onClick={() => handleClick("blue")} className={`${colorTheme==="blue"? 'active':''}`}></div>
      <div id="red" onClick={() => handleClick("red")} className={`${colorTheme==="red"? 'active':''}`}></div>
      <div id="yellow" onClick={() => handleClick("yellow")} className={`${colorTheme==="yello"? 'active':''}`}></div>
      <div id="green" onClick={() => handleClick("green")} className={`${colorTheme==="green"? 'active':''}`}></div>
      <div id="lavendar" onClick={() => handleClick("lavendar")} className={`${colorTheme ==="lavender"? 'active':''}`}></div>
      <div id="pink" onClick={() => handleClick("pink")} className={`${colorTheme ==="pink"? 'active':''}`}></div>
      <div id="black" onClick={() => handleClick("black")} className={`${colorTheme ==="black"? 'active':''}`}></div>
    </div>);
  };

  return { sets, colorTheme , setColortheme };
}
