import React from "react";
import AddEvent from "./AddEvent";
import Header from "./Header";
import PastEvent from "./PastEvent";
import Home from "./Home";
import UpcomingEvent from "./UpcomingEvent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pastevents">
            <PastEvent />
          </Route>
          <Route path="/addevent">
            <AddEvent />
          </Route>
          <Route path="/upcomingevents">
            <UpcomingEvent />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
