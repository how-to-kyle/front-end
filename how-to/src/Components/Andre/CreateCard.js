import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { axiosWithAuth } from './utils/axiosWithAuth';

import { HowToContext } from './contexts/HowToContext';

const CreateCard = (props) => {
  // const [formInputs, setFormInputs] = useState({

  // })

  const { testData } = useContext(HowToContext);

  // useEffect(() => {
  //   axiosWithAuth()
  //     // console.log(axiosWithAuth);
  //     // debugger;
  //     .post("/api/posts", formInputs)
  //     .then((res) => 
  //       console.log(res.data)
        
  //     )
  //     .catch((err) => console.log(err));
  // }, []);



  return(
    <div>
      <h3>CreateCardComponent</h3>
      <div className="how-to-card">
        {/* <form onSubmit={handleSubmit}>
          <label htmlFor="">Title: </label>
          <input
            type="text"
            name="title"
            value={formInputs.title}
            onChange={handleChange}
          />
          <Link to="/how-to-list">
            <button>Submit</button>
          </Link>
        </form> */}
      </div>
    </div>
  )
}

export default CreateCard;