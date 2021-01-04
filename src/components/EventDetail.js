import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { actionTypes } from "../reducer";
import gfm from "remark-gfm";
import { useHistory } from "react-router-dom";
const EventDetail = () => {
  const user_auth = sessionStorage.getItem("user_auth");
  const eve_id = sessionStorage.getItem("eventId");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  console.log(user_auth);

  //取得該活動資訊
  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/fjuems/fjuems-backend/selectedEvent.php?eventID=${eve_id}`
      )
      .then((res) => {
        const data = res.data;
        // setEventInfo(event);
        console.table(data);
        const Id = data[0].eve_id;
        const title = data[0].eve_title;
        const imgURL = data[0].eve_imgURL;
        const eveDes = data[0].eve_description;
        const eveTimeStart = data[0].eve_timeStart;
        const eveTimeEnd = data[0].eve_timeEnd;
        const eveLimit = data[0].eve_limit;
        sessionStorage.setItem("eventId", Id);
        sessionStorage.setItem("eventTitle", title);
        sessionStorage.setItem("eventImgURL", imgURL);
        sessionStorage.setItem("eventDes", eveDes);
        sessionStorage.setItem("eventTimeStart", eveTimeStart);
        sessionStorage.setItem("eventTimeEnd", eveTimeEnd);
        sessionStorage.setItem("eventLimit", eveLimit);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const title = sessionStorage.getItem("eventTitle");
  const imgURL = sessionStorage.getItem("eventImgURL");
  const eveDes = sessionStorage.getItem("eventDes");

  // 刪除活動
  const deleteEvent = () => {
    axios
      .post(
        `http://localhost:8888/fjuems/fjuems-backend/deleteEvent.php?eventID=${eve_id}`
      )
      .then((res) => {
        const data = res.data;
        //console.table(data);
      })
      .catch((error) => {
        console.log(error);
      });
    history.push("/");
  };

  // 修改活動第一步、轉址、然後設置 global state -> updateEvent 為true
  const ClickUpdateBtn = () => {
    dispatch({
      type: actionTypes.SET_UPDATEEVENT,
      updateEvent: true,
    });
    history.push(`/addEvent?eventID=${eve_id}`);
  };
  return (
    <div className="eventDetail">
      <img src={imgURL} alt="" className="eventDetail__banner" />

      <div className="eventDetail__info">
        <h3>{title}</h3>

        <ReactMarkdown
          plugins={[[gfm, { singleTilde: false }]]}
          source={eveDes}
        />
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
            onClick={ClickUpdateBtn}
          />
          <input
            type="submit"
            value="刪除活動"
            className="eventDetail__delete"
            onClick={deleteEvent}
          />
        </div>
      )}
    </div>
  );
};

export default EventDetail;
