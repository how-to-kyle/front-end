import React, { useState, useEffect, Component } from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { HowToContext } from "./contexts/HowToContext";

import Signup from "./Signup";
import Login from "./Login";
import HowToList from "./HowToList";

import CreateCard from "./CreateCard";
import EditCard from "./EditCard";
import { axiosWithAuth } from "./utils/axiosWithAuth";

function AndreApp() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      // console.log(axiosWithAuth);
      // debugger;
      .get("/posts")
      .then((res) =>
        // console.log(res)
        setTestData(res.data)
      )
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
          {/* <HowToList />
        </PrivateRoute> */}

        <PrivateRoute exact path="/how-to-list/create-card" >
          <CreateCard />
        </PrivateRoute>

        <PrivateRoute exact path="/how-to-list/edit-card/:id">
          <EditCard />
        </PrivateRoute>
      </HowToContext.Provider>
    </div>
  );
}

export default AndreApp;
