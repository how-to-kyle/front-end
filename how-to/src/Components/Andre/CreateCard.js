import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const CreateCard = (props) => {

  return(
    <div>
      <h3>This is a CreateCard element.</h3>
      <Link to="/how-to-list">
        <button>CreateCard</button>
      </Link>
    </div>
  )
}

export default CreateCard;