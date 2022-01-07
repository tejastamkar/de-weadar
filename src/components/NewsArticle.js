import React from "react";
import { useHistory } from 'react-router-dom'
function NewsArticle({ data }) {
  let navigate = useHistory()

  return (
    <div className="news">
      <img src={data.urlToImage} className="news__urltoimage" alt="newImage" />
      <div className="news__div">
        <h1 className="news__title">{data.title}</h1>
        <p className="news__desc">{data.description}</p>
        <span>
          <button className='news__btn' title="Click Me" name='news__btn' onClick={() => navigate.push(`/NewsView/${data.id}`)} >Click me</button>
        </span>
        <hr style={{ bottom: 20 }} />
        <div className="news__author">{data.name}</div>
      </div>
    </div>
  );
}

export default NewsArticle;
