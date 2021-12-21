import React from "react";
import { NewData } from "./NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  // const { data } = useContext(NewsContext);
  const data = NewData;
  return (
    <div className="all__news">
      {data
        ? data.map((item) => <NewsArticle data={item} key={item.id} />)
        : "Loading"}
    </div>
  );
}

export default News;
