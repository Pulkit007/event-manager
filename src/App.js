import React from "react";
import AddEvent from "./AddEvent";
import Header from "./Header";
import PastEvent from "./PastEvent";
import Home from "./Home";
import MyEvents from "./MyEvents";
import UpcomingEvent from "./UpcomingEvent";
import upcoming from "./upcoming_event";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(upcoming);
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/myevents">
            <MyEvents />
          </Route>
          <Route path="/pastevents">
            <PastEvent />
          </Route>
          <Route path="/addevent">
            <AddEvent upcoming={data} setUpcoming={setData} />
          </Route>
          <Route path="/upcomingevents">
            <UpcomingEvent upcoming={data} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
