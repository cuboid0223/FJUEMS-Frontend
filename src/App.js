import React, { useEffect, useState } from "react";
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
import UserAdminTest from "./components/UserAdminTest";
import Register from "./components/Register";
import axios from "axios";
//import { useStateValue } from "./StateProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import "./scss/all.css";

function App() {
  const [events, setEvents] = useState([]);
  //const [{ selectedEventId }, dispatch] = useStateValue();
  useEffect(() => {
    axios
      .post("http://localhost:8888/fjuems/fjuems-backend/eventData.php")
      .then((res) => {
        const data = res.data; //
        setEvents(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      {/* header */}
      <Router>
        <Header />
        <Switch>
          <Route path="/userAdminTest">
            <div className="app__page">
              <UserAdminTest />
            </div>
          </Route>
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

          <Route path="/register">
            <div className="app__page">
              <Register />
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
              <EventList events={events} />
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
