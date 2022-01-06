import React from "react";
import { NewData } from "../components/NewsContext";
import NewsArticle from "../components/NewsArticle";

function News(props) {
  // const { data } = useContext(NewsContext);
  const sortdata = NewData;
  var data = [];
  sortdata.forEach((element) => {
    if (element.id < 7) {
      data.push(element);
    }
  });
  console.log(data);
  return (
    <div className="all__news">
      {data
        ? data.map((item) => <NewsArticle data={item} key={item.id} />)
        : "Loading"}
    </div>
  );
}

export default News;
