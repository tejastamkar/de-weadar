import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./News";
import "./news.css";
function DailyBulletin() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}
export default DailyBulletin;
