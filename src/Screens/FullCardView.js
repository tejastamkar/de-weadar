import React from "react";
import '../Styles/FullCard.scss'
import BackBtn from '../Images/BackBtn.png'
import { useParams } from "react-router-dom";
import { NewData } from "../components/NewsContext";
import { useHistory } from 'react-router-dom'
export function FullCardView() {
  let { data } = useParams()
  let navigate = useHistory()
  const item = NewData[data - 1]
  return (
    <>
      <div className="Main">
        <div className="BackBtn" onClick={() => navigate.push(`/DailyBulletin`)} >
          <img src={BackBtn} className="BackBtnImage" alt="BackBtn" />
        </div>
        <h1 className="Title">{item.title}</h1>
      </div>
      <div >
        <img className="imgcard" src={item.urlToImage} alt={'This is Card time'} />
        <p className="full_desc">{item.description}</p>
      </div>
    </>
  );
}
