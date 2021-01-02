import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import EventCategory from "./components/EventCategory";
import EventList from "./components/EventList";
import Footer from "./components/Footer";
import AddEvent from "./components/AddEvent";
import MyEvent from "./components/MyEvent";
import Login from "./components/Login";
import EventDetail from "./components/EventDetail";
import UserAdmin from "./components/UserAdmin";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/all.css";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Router>
        <Header />
        <Switch>
          
          <Route path="/userAdmin">
            <div className="app__page">
              <UserAdmin />
            </div>
          </Route>

          <Route path="/eventDetail">
            <div className="app__page">
              <EventDetail />
            </div>
          </Route>

          <Route path="/myEvent">
            <div className="app__page">
              <MyEvent />
            </div>
          </Route>

          <Route path="/addEvent">
            <div className="app__page">
              <AddEvent />
            </div>
          </Route>

          <Route path="/login">
            <div className="app__page">
              <Login />
            </div>
          </Route>

          <Route path="/">
            {/* 自動輪播投影片 */}
            <div className="app__page">
              <Carousel />
              {/* 興趣選項 icon with materialUI */}
              <EventCategory />
              {/* event card list*/}
              <EventList />
            </div>
            {/* footer */}
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
