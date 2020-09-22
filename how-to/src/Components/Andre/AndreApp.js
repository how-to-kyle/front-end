import React from 'react';
import { Route } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';

function AndreApp() {
  return (
    <div className="AndreApp">

      <Route exact path="/">
        <Signup className="DeleteBeforePRWithNasha" />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>
        
      
      

    </div>
  );
}

export default AndreApp;
