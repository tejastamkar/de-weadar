import React from "react";
// import { NewData } from "../components/NewsContext";
import NewsArticle from "../components/NewsArticle";

class News extends React.Component {
  constructor(items) {
    super();
    this.state = { Data: items };
  }

  render() {
    const data = this.state.Data.items;
    return (
      <div className="all__news">
        {data
          ? data.map((item, index) => <NewsArticle data={item} key={index} />)
          : "Loading"}
      </div>
    );
  }
}

export default News;
