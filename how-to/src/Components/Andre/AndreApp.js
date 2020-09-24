import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { HowToContext } from "./contexts/HowToContext";

import Signup from "./Signup";
import Login from "./Login";
import HowToList from "./HowToList";

import CreateCard from "./CreateCard";
import EditCard from "./EditCard";
import PutCard from './PutCard';
import { axiosWithAuth } from "./utils/axiosWithAuth";


function AndreApp() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/posts")
      .then((res) => {
        console.log('Andre App Main Posts Data', res.data)
        setTestData(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="AndreApp">
      <Route exact path="/register">
        <Signup />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <HowToContext.Provider value={{ testData }}>
        <PrivateRoute exact path="/how-to-list" component={HowToList} />

        <PrivateRoute exact path="/how-to-list/create-card" component={CreateCard} />

        <PrivateRoute exact path="/how-to-list/put-card/:id" component={PutCard} />
         


      </HowToContext.Provider>
    </div>
  );
}

export default AndreApp;
