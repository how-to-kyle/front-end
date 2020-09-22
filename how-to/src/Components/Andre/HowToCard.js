import React from "react";
import { Link } from 'react-router-dom';

const HowToCard = (props) => {
  // const { howTo } = props.howTo;
  // console.log(props);
  // console.log(props)

  return (
    <div className="howToCard">
      <h3>How To: {props.howTo.title} </h3>
      {/* <Link to="/how-to-list/edit-card" >
        <button>Edit Card Placeholder</button>
      </Link> */}
    </div>
  );
};

export default HowToCard;
