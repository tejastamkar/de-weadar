import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "../Screens/News";
import "../Styles/news.css";
function DailyBulletin() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}
export default DailyBulletin;
