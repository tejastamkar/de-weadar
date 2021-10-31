import React from "react";

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
        <hr />
        <div className="news__author">{data.source.name}</div>
      </div>
    </div>
  );
}

export default NewsArticle;
