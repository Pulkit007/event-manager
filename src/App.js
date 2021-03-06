import React from "react";
import AddEvent from "./AddEvent";
import Header from "./Header";
import PastEvent from "./PastEvent";
import Home from "./Home";
import MyEvents from "./MyEvents";
import UpcomingEvent from "./UpcomingEvent";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getEvents } from "./api/Api";
import Login from "./Login";

function App() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  useEffect(() => {
    getEvents().then((res) => {
      setData(res);
    });
  }, []);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "/" + mm + "/" + dd;

  const upcoming = data.filter((item) => {
    const x = new Date(item.date);
    const y = new Date(today);
    return x > y;
  });

  useEffect(() => {
    setUpcomingData(upcoming);
  }, [data]);

  const past = data.filter((item) => {
    const x = new Date(item.date);
    const y = new Date(today);
    return x < y;
  });

  return (
    <main>
      <Router>
        <Header login={login} />
        <Switch>
          <Route path="/" exact={true}>
            <Home login={login} />
          </Route>
          <Route path="/login">
            <Login login={login} setLogin={setLogin} />
          </Route>
          <Route path="/myevents">
            <MyEvents myevents={upcomingData} setUpcoming={setUpcomingData} />
          </Route>
          <Route path="/pastevents">
            <PastEvent past={past} />
          </Route>
          <Route path="/addevent">
            <AddEvent />
          </Route>
          <Route path="/upcomingevents">
            <UpcomingEvent
              upcoming={upcomingData}
              setUpcoming={setUpcomingData}
              login={login}
            />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
