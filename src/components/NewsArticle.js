import React from "react";
// import { FullCardView } from "../Screens/FullCardView";
function NewsArticle({ data }) {
  return (
    <div className="news">
      <img src={data.urlToImage} className="news__urltoimage" alt="newImage" />
      <div className="news__div">
        <h1 className="news__title">{data.title}</h1>
        <p className="news__desc">{data.description}</p>
        <span>
          <a href={data.url} className="news__url">
            click here
          </a>
        </span>
        <hr style={{ bottom: 20 }} />
        <div className="news__author">{data.name}</div>
      </div>
    </div>
  );
}

export default NewsArticle;
