import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Avatar } from "@material-ui/core";
// React Context API
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { useHistory } from "react-router-dom";
import axios from "axios";

const MyEvent = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log("USER: ", user);
  const [userEvents, setUserEvents] = useState([]); // storage user events from db
  const userId = sessionStorage.getItem("user_id");
  const user_name = sessionStorage.getItem("user_name");
  const user_account = sessionStorage.getItem("user_account");
  const user_auth = sessionStorage.getItem("user_auth");

  const history = useHistory();

  //登出
  const logout = () => {
    dispatch({
      type: actionTypes.SET_USER,
      user: null, //把 User 丟到 Global State（contextAPI）
    });
    sessionStorage.clear();
    history.push("/");
  };
  // check my events from data
  // need userId to access user events
  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/fjuems/fjuems-backend/checkMyEvent.php?userId=${userId}`
      )
      .then((res) => {
        const data = res.data; //
        console.table(data);
        setUserEvents(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="myEvent">
      <div className="myEvent__aboutMe">
        <Avatar className="myEvent__aboutMe__avatar" />
        <div className="myEvent__aboutMe__Info">
          <h2>{user_name ? user_name : "請先登入"}</h2>
          <p>學號： {user_account ? user_account : "請先登入"}</p>
          <p>權限： {user_auth ? user_auth : "無權限"}</p>
          <input
            type="button"
            value="登出"
            className={
              user_account ? "myEvent__aboutMe__deleteBtn" : "hide-btn"
            }
            onClick={logout}
          />
          <input
            type="button"
            value="刪除帳號"
            className={
              user_account ? "myEvent__aboutMe__deleteBtn" : "hide-btn"
            }
            //onclick={() => alert('kkk')}
          />
          <input
            type="button"
            value="編輯帳密"
            className={
              user_account ? "myEvent__aboutMe__updateBtn" : "hide-btn"
            }
          />
        </div>
      </div>

      <div className="myEvent__countEvents">
        <h2>你當月參加了 6 個活動</h2>
        <p>(總共參加了 {userEvents.length} 個活動)</p>
      </div>

      <div className="myEvent__list">
        {userEvents.map((userEvent) => (
          <EventCard
            eventId={userEvent.eve_id}
            photoURL={userEvent.eve_imgURL}
            title={userEvent.eve_title}
            timeStart={userEvent.eve_timeStart}
            timeEnd={userEvent.eve_timeEnd}
          />
        ))}
        {/* <EventCard
          photoURL="https://t.kfs.io/organization_resource_files/8544/36955/__________1200x630__1_.jpg"
          title="【 A-Lin 2020《Passenger 旅．課》世界巡迴演唱會 高雄站 】"
          date="2020/02/23"
        /> */}
      </div>
    </div>
  );
};

export default MyEvent;
