// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import EditCard from "./EditCard";

// import { HowToContext } from './contexts/HowToContext';
  

// function GetEditCard() {
//   const { testData } = useContext(HowToContext);

//   const [howTo, setHowTo] = useState(testData);
//   const params = useParams();

//   console.log('Edit Card "howTo" state', howTo)


//   // debbuger
//   const fetchHowTo = (id) => {
//     axios
//       .get(`/api/posts/${id}`)
//       .then((res) => {
//         setHowTo(res.data)
//         console.log('Edit Card AXIOS STATEMENT', res.data)
//       })
//       .catch((err) => console.log(err.response));
//   };

//   useEffect(() => {
//     fetchHowTo(params.id);
//     // console.log("GetEditCard", howTo);

//   }, [params.id]);

//   if (!howTo) {
//     return <div>Loading HowTo information...</div>;
//   }

//   // console.log("GetEditCard", howTo);
//   return (
//     <div className="save-wrapper">
//       {/* <h3>{howTo}</h3> */}
//       <EditCard howTo={howTo} id={params.id} />
//     </div>
//   );
// }

// export default GetEditCard;
