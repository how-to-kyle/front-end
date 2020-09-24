import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import HowToCard from "./HowToCard";

import { HowToContext } from "./contexts/HowToContext";

function HowToList(props) {
  // console.log(props);
  const { testData } = useContext(HowToContext);
  const [filterWord, setFilterWord] = useState("");
  const [search, setSearch] = useState("");

  //Search/Filter Update state
  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const startFilter = () => {
    setFilterWord(search);
  };

  // console.log(search);

  const items = testData
    .filter((data) => {
      if (filterWord == null) {
        return data;
      } else if (
        data.title.toLowerCase().includes(testData.filterWord.toLowerCase()) ||
        data.title.toLowerCase().includes(testData.filterWord.toLowerCase())
      ) {
        return data;
      }
    })
    .map((howTo) => {
      return (
        <Link key={howTo.id} to={`/how-to-list/Put-card/${howTo.id}`}>
          <HowToCard howTo={howTo} />
        </Link>
      );
    });

  return (
    <div className="howToList">
      <a href="https://inspiring-lumiere-e68350.netlify.app/">Marketing Page</a>
      <Link to="/how-to-list/create-card">
        <button>Create a How-To</button>
      </Link>
      <form className="search-container">
        <input
          value={search}
          onChange={updateSearch}
          type="text"
          style={{ width: "200px", margin: "20px 5px 20px 20px" }}
        />

        <button
          onClick={startFilter}
          style={{ width: "100px", margin: "20px 30px 20px 0px" }}
        >
          Search
        </button>
      </form>
      [items]
    </div>
  );
}

export default HowToList;
