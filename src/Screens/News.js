import React from "react";
import { NewData } from "../components/NewsContext";
import NewsArticle from "../components/NewsArticle";

function News() {
  const data = NewData;
  // var data = [];
  // sortdata.forEach((element) => {
  //   if (element.id < 7) {
  //     data.push(element);
  //   }
  // });
  return (
    <div className="all__news">
      {data
        ? data.map((item) => <NewsArticle data={item} key={item.id} />)
        : "Loading"}
    </div>
  );
}

export default News;
