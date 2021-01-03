import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
const EventDetail = () => {
  const user_auth = sessionStorage.getItem("user_auth");
  const eve_id = sessionStorage.getItem("eventId");
  const [selectedEvent, setSelectedEvent] = useState(null);
  console.log(user_auth);
  
  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/fjuems/fjuems-backend/selectedEvent.php?eventID=${eve_id}`
      )
      .then((res) => {
        const data = res.data;
        // setEventInfo(event);
        console.table(data);
        const title = data[0].eve_title;
        const imgURL = data[0].eve_imgURL;
        const eveDes = data[0].eve_description;
        sessionStorage.setItem("eventTitle", title);
        sessionStorage.setItem("eventImgURL", imgURL);
        sessionStorage.setItem("eventDes", eveDes);
      })
      .catch((error) => {
        console.error(error);
      });
     
  }, []);
  const title = sessionStorage.getItem("eventTitle");
  const imgURL = sessionStorage.getItem("eventImgURL");
  const eveDes = sessionStorage.getItem("eventDes");

  return (
    <div className="eventDetail">
      <img src={imgURL} alt="" className="eventDetail__banner" />

      <div className="eventDetail__info">
        <h3>{title}</h3>
        <p>{eveDes}</p>
      </div>
      <hr />
      {user_auth == "normal" ? (
        <div className="eventDetail__input">
          <input type="submit" value="立即報名" className="eventDetail__join" />
          <input
            type="submit"
            value="取消報名"
            className="eventDetail__inJoin"
          />
        </div>
      ) : (
        <div className="eventDetail__input">
          <input type="submit" value="立即報名" className="eventDetail__join" />
          <input
            type="submit"
            value="取消報名"
            className="eventDetail__inJoin"
          />
          <input
            type="submit"
            value="修改活動"
            className="eventDetail__update"
          />
          <input
            type="submit"
            value="刪除活動"
            className="eventDetail__delete"
          />
        </div>
      )}
    </div>
  );
};
 
export default EventDetail;
