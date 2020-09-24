import React from 'react';
import { useHistory } from "react-router-dom";

const EditCard = (props) => {

  return(
    
    <div>
      <h3>This is a EditCard element </h3>
    </div>
  )
}

export default EditCard;



















// import React, { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";

// import axios from "axios";

// const EditCard = (props) => {
//   let history = useHistory();
//   const { title } = props.howTo;
//   const [formInputs, setFormInputs] = useState({
//     title: title,
//   });
//   const params = useParams();

//   const handleChange = (e) => {
//     setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e, id) => {
//     axios
//       .put(`/api/posts/${id}`, formInputs)
//       .then((res) => {
//         console.log(res);
//         setFormInputs({
//           title: "",
//         });
//         history.push("/how-to-list/posts");
//       })
//       .catch((err) => console.log(err.response));
//   };

//   useEffect(() => {
//     handleSubmit(params.id);
//   }, [params.id]);

//   return (
//     <div className="edit-card">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">Title: </label>
//         <input
//           type="text"
//           name="title"
//           value={formInputs.title}
//           onChange={handleChange}
//         />
//         <br />
//         <div className="save-button" onClick={handleSubmit}>
//           Update Movie
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditCard;

