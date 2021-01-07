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
import SearchPage from "./components/SearchPage";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { useHistory } from "react-router-dom";
//import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/all.css";

function App() {
  const [events, setEvents] = useState([]);
  const [searchEvents, setSearchEvents] = useState([]);
  const [{ query }, dispatch] = useStateValue();
  const [message, setMessage] = useState("");
  const history = useHistory();
  //const [{ selectedEventId }, dispatch] = useStateValue();
  
  // 首頁活動表
  useEffect(() => {
    axios
      .post("http://localhost:8888/fjuems/fjuems-backend/eventData.php")
      .then((res) => {
        const data = res.data; //
        setEvents(data);
        //console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);


  // 搜尋
  useEffect(() => {
    if (query.length > 0) {
      axios
        .get(
          `http://localhost:8888/fjuems/fjuems-backend/searchEvent.php?q=${query}`
        )
        .then((res) => {
          const events = res.data;
          console.table(events);
          if (events.length > 0) {
            //如果搜尋的東西大於 1 個
            setSearchEvents(events);
          } else {
            console.log("not find");
            setMessage("找不到");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [query]);

  return (
    <div className="app">
      {/* header */}
      <Router>
        <Header />
        <Switch>
          <Route path="/eventSearch">
            <div className="app__page">
              <SearchPage message={message} events={searchEvents} />
              <EventList events={searchEvents} />
            </div>
          </Route>

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
