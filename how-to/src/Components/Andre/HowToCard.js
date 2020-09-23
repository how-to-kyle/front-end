import React from "react";
import { Link } from 'react-router-dom';

const HowToCard = (props) => {
  return (
    <div className="howToCard">
      <h3>How To: {props.howTo.title} </h3>
    </div>
  );
};

export default HowToCard;
