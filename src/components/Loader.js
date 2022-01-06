import React from "react";
import Lottie from "react-lottie";
import * as location from "./world-locations.json";
// import * as success from "../1127-success.json";

export function PreLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //   const [data, setData] = useState([]);
  //   const [loading, setloading] = useState(undefined);
  //   const [completed, setcompleted] = useState(undefined);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       fetch("https://jsonplaceholder.typicode.com/posts")
  //         .then((response) => response.json())
  //         .then((json) => {
  //           console.log(json);
  //           setData(json);
  //           setloading(true);

  //           setTimeout(() => {
  //             setcompleted(true);
  //           }, 1000);
  //         });
  //     }, 2000);
  //   }, []);

  return (
    <>
      <Lottie options={defaultOptions} height={200} width={200} />
    </>
  );
}
