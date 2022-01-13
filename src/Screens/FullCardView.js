import React from "react";
import '../Styles/FullCard.scss'
import BackBtn from '../Images/BackBtn.png'
import { useLocation, Link } from "react-router-dom";


export function FullCardView() {
  const location = useLocation()
  const { data } = location.state


  return (
    <>
      <div className="Main">
        <Link
          className='BackBtn'
          to={{
            pathname: `/DailyBulletin`,

          }}
        ><img src={BackBtn} className="BackBtnImage" alt="BackBtn" /></Link>
        {/* <div className="BackBtn" onClick={() => navigate.push(`/DailyBulletin`)} >
          <img src={BackBtn} className="BackBtnImage" alt="BackBtn" />
        </div> */}
        <h1 className="Title">{data.title}</h1>
      </div>
      <div >
        <img className="imgcard" src={data.urlToImage} alt={'This is Card time'} />
        <p className="full_desc">{data.description}</p>
      </div>
    </>
  );
}
