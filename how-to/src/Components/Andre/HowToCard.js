import React from "react";

const HowToCard = (props) => {
  // const { howTo } = props.howTo;
  // console.log(props);
  // console.log(props)

  return (
    <div className="howToCard">
      <h3>How To: {props.howTo.title} </h3>
    </div>
  );
};

export default HowToCard;
