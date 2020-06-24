import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import NoMatch from "../../pages/NoMatch";
import Saved from "../../pages/Saved";
import Navbar from "../../components/Navbar";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
