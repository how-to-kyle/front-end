import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HowToCard from './HowToCard';

import { HowToContext } from './contexts/HowToContext';


function HowToList(props) {
  console.log(props);
  const { testData } = useContext(HowToContext);

  return(
    <div className="howToList">
      <Link to="/how-to-list/create-card" >
        <button>Create a How-To</button>
      </Link>
      {
        testData.map(howTo => (
          <Link key={howTo.id} to={`/howToList/edit/${howTo.id}`}>
            <HowToCard howTo={howTo} />
          </Link>
        ))
      }
      <Link to="/how-to-list/edit-card" >
        <button>Edit Card Placeholder</button>
      </Link>
    </div>
  )
}

export default HowToList;