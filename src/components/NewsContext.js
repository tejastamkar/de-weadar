import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "b244d1675e1b4aae9782aabe3c86b791";
  const url = `https://newsapi.org/v2/everything?pagesize=6&q=weather&apiKey=${apiKey}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export const NewData = [
  {
    id: 1,
    urlToImage:
      "https://static.toiimg.com/thumb/msid-88399876,imgsize-12022,width-400,resizemode-4/88399876.jpg",
    title: "YouTube told to block 2 news sites, 20 channels",
    description:
      "Telecom and YouTube to block two news websites and 20 YouTube channels that were found to be “purveyors of pernicious, fake and anti-India” content. ",
    url: "https://timesofindia.indiatimes.com/india/youtube-told-to-block-2-news-sites-20-channels/articleshow/88399869.cms",
    name: "TOI India",
    category: "Technology",
  },
  {
    id: 2,
    urlToImage:
      "https://static.toiimg.com/thumb/msid-88381873,imgsize-63938,width-400,resizemode-4/88381873.jpg",
    title: "First in 19 months, India's weekly Covid count falls below 50,000",
    description:
      " infections continue to fall in India. The country logged less than 50,000 fresh cases in the week ending Sunday, the first time in 19 months that the weekly count had dropped below that mark. ",
    url: "https://timesofindia.indiatimes.com/india/first-in-19-months-indias-weekly-covid-count-falls-below-50000/articleshow/88379706.cms",
    name: "TOI India",
    category: "Covid",
  },
  {
    id: 3,
    urlToImage:
      "https://static.toiimg.com/thumb/msid-88379936,imgsize-112028,width-400,resizemode-4/88379936.jpg",
    title: "Goa would have been liberated earlier had Patel lived longer",
    description:
      " Prime Minister Narendra Modi  said here on Sunday that it would not have taken so long for Goa to be liberated from Portuguese rule had ",
    url: "https://timesofindia.indiatimes.com/india/goa-would-have-been-liberated-earlier-had-patel-lived-longer-pm/articleshow/88379918.cms",
    name: "TOI India",
    category: "Polictic",
  },
  {
    id: 4,
    urlToImage:
      "https://static.toiimg.com/thumb/msid-88381873,imgsize-63938,width-400,resizemode-4/88381873.jpg",
    title: "First in 19 months, India's weekly Covid count falls below 50,000",
    description:
      " infections continue to fall in India. The country logged less than 50,000 fresh cases in the week ending Sunday, the first time in 19 months that the weekly count had dropped below that mark. ",
    url: "https://timesofindia.indiatimes.com/india/first-in-19-months-indias-weekly-covid-count-falls-below-50000/articleshow/88379706.cms",
    name: "TOI India",
    category: "Covid",
  },
  {
    id: 5,
    urlToImage:
      "https://static.toiimg.com/thumb/msid-88381873,imgsize-63938,width-400,resizemode-4/88381873.jpg",
    title: "First in 19 months, India's weekly Covid count falls below 50,000",
    description:
      " infections continue to fall in India. The country logged less than 50,000 fresh cases in the week ending Sunday, the first time in 19 months that the weekly count had dropped below that mark. ",
    url: "https://timesofindia.indiatimes.com/india/first-in-19-months-indias-weekly-covid-count-falls-below-50000/articleshow/88379706.cms",
    name: "TOI India",
    category: "Covid",
  },
];
