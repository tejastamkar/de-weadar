import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "../Screens/News";
import "../Styles/news.css";
import { db } from '../Firebase'
import { collection, getDocs } from "firebase/firestore";
import { PreLoader } from "./Loader";

class WeatherBulletin extends React.Component {
  state = {
    Data: [],
    loading: true
  }
  async componentDidMount() {

    const DbCollection = collection(db, "Weather");
    await getDocs(DbCollection).then(async (snapshort) => {
      snapshort.docs.forEach((doc) => {
        this.state.Data.push({ ...doc.data(), id: doc.id });
      });
    });
    this.setState({ loading: false })

  }

  render() {
    return (
      this.state.loading ? (
        <>
          <PreLoader />
        </>
      ) : (

        <NewsContextProvider>
          <News items={this.state.Data} />
        </NewsContextProvider>
      )
    );

  }
}



// function DailyBulletin() {

//   return (
//     <NewsContextProvider>
//       <News />
//     </NewsContextProvider>
//   );
// }
export default WeatherBulletin;
