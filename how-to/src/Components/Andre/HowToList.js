import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HowToCard from "./HowToCard";

import { HowToContext } from "./contexts/HowToContext";

function HowToList(props) {
  // console.log(props);
  const { testData } = useContext(HowToContext);

  // console.log(testData[1].title)
  
  return (
    <div className="howToList">
      <a href="https://inspiring-lumiere-e68350.netlify.app/">Marketing Page</a>
      <Link to="/how-to-list/create-card">
        <button>Create a How-To</button>
      </Link>
      {testData.map((howTo) => (
        <Link key={howTo.id} to={`/how-to-list/Put-card/${howTo.id}`}>
          <HowToCard howTo={howTo} />
        </Link>
      ))}
    </div>
  );
}

export default HowToList;
