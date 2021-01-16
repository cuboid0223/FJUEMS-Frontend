import React, { useState, useMemo } from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { actionTypes } from "../reducer";
import gfm from "remark-gfm";
import { useHistory } from "react-router-dom";
const EventDetail = () => {
  const user_auth = sessionStorage.getItem("user_auth");
  const eve_id = sessionStorage.getItem("eventId");
  const userId = sessionStorage.getItem("user_id");
  const title = sessionStorage.getItem("eventTitle");
  const imgURL = sessionStorage.getItem("eventImgURL");
  const type = sessionStorage.getItem("eventType"); //
  const eveDes = sessionStorage.getItem("eventDes");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  //console.log(user_auth);

  //取得該活動資訊
  useMemo(() => {
    axios
      .get(
        `http://localhost:8888/fjuems/fjuems-backend/selectedEvent.php?eventID=${eve_id}`
      )
      .then((res) => {
        const data = res.data;
        // setEventInfo(event);
        //console.table(data);
        const Id = data[0].eve_id;
        const title = data[0].eve_title;
        const imgURL = data[0].eve_imgURL;
        const eveDes = data[0].eve_description;
        const eveTimeStart = data[0].eve_timeStart;
        const eveTimeEnd = data[0].eve_timeEnd;
        const eveLimit = data[0].eve_limit;
        const eveType = data[0].type_name;
        const eveTypeId = data[0].type_id;
        sessionStorage.setItem("eventId", Id);
        sessionStorage.setItem("eventTitle", title);
        sessionStorage.setItem("eventImgURL", imgURL);
        sessionStorage.setItem("eventDes", eveDes);
        sessionStorage.setItem("eventTimeStart", eveTimeStart);
        sessionStorage.setItem("eventTimeEnd", eveTimeEnd);
        sessionStorage.setItem("eventLimit", eveLimit);
        sessionStorage.setItem("eventTypeName", eveType);
        sessionStorage.setItem("eventTypeId", eveTypeId);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 刪除活動
  const deleteEvent = () => {
    alert("是否真的刪除?");
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
    window.location.reload();
  };

  // 修改活動，第一步、轉址、然後設置 global state -> updateEvent 為true
  const ClickUpdateBtn = () => {
    dispatch({
      type: actionTypes.SET_UPDATEEVENT,
      updateEvent: true,
    });
    history.push(`/addEvent?eventID=${eve_id}`);
  };

  //加入活動
  const joinEvent = () => {
    //console.log("click");
    if (userId) {
      // if there is a user, then...need: user_id, eve_id
      axios
        .get(
          `http://localhost:8888/fjuems/fjuems-backend/joinEvent.php?eventID=${eve_id}&userID=${userId}`
        )
        .then((res) => {
          const data = res.data;
          //console.table(data);
          if (data == "you have joined already!!") {
            alert("報名失敗，先前已報名過囉");
          } else {
            alert("報名成功");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      history.push("/");
    }
  };

  //取消活動
  const cancelJoinEvent = () => {
    if (userId) {
      // if there is a user, then...need: user_id, eve_id
      axios
        .get(
          `http://localhost:8888/fjuems/fjuems-backend/cancelJoinEvent.php?eventID=${eve_id}&userID=${userId}`
        )
        .then((res) => {
          const data = res.data;
          console.table(data);
          alert(data);
        })
        .catch((error) => {
          console.log(error);
        });

      history.push("/");
    }
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

      {user_auth != "admin" ? (
        <div className="eventDetail__input">
          <input
            type="submit"
            value="立即報名"
            className="eventDetail__join"
            onClick={joinEvent}
          />
          <input
            type="submit"
            value="取消報名"
            className="eventDetail__inJoin"
            onClick={cancelJoinEvent}
          />
        </div>
      ) : (
        <div className="eventDetail__input">
          <input
            type="submit"
            value="立即報名"
            className="eventDetail__join"
            onClick={joinEvent}
          />
          <input
            type="submit"
            value="取消報名"
            className="eventDetail__inJoin"
            onClick={cancelJoinEvent}
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
