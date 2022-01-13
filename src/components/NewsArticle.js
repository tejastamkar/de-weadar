import React from "react";
import { Link } from 'react-router-dom'

function NewsArticle({ data }) {

  return (
    <div className="news">
      <img src={data.urlToImage} className="news__urltoimage" alt="newImage" />
      <div className="news__div">
        <h1 className="news__title">{data.title}</h1>
        <p className="news__desc">{data.description}</p>
        <div>
          <Link
            className='news__btn'
            to={{
              pathname: `/NewsView/${data.id}`,
              state: { data }
            }}
          >Click me</Link>
        </div>

        <div className="news__author"><hr />{data.name}</div>
      </div>
    </div>
  );
}

export default NewsArticle;
