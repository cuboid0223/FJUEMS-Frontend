import React, { useEffect } from "react";
import DoubleArrowOutlinedIcon from "@material-ui/icons/DoubleArrowOutlined";
import { Link } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { useParams } from "react-router-dom";
const EventCard = ({
  eventId,
  photoURL,
  title,
  dateStart,
  dateEnd,
  timeStart,
  timeEnd,
}) => {
  const [{ selectedEventId }, dispatch] = useStateValue();

  const sendId = () => {
    dispatch({
      type: actionTypes.SET_SELECTEDEVENTID,
      selectedEventId: eventId, //把 eventId 丟到 Global State（contextAPI）
    });
    window.location.reload();//刷新頁面讓新的session能呈現 
    sessionStorage.setItem("eventId", eventId);
  };

  let id = useParams();

  return (
    <div
      className="eventCard"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${photoURL})`,
        backgroundPosition: "center center",
      }}
      onClick={sendId}
    >
      <Link to={`/eventDetail?eve_id=${eventId}`}>
        <div className="eventCard__info">
          <h3 className="eventCard__title">{title}</h3>
          <div className="eventCard__wrap">
            {/* <p className="eventCard__date">{dateStart}</p> ~
            <p className="eventCard__date">{dateEnd}</p> */}
            <p className="eventCard__date">{timeStart}</p> ~
            <p className="eventCard__date">{timeEnd}</p>
            <DoubleArrowOutlinedIcon
              className="eventCard__btn"
              fontSize="large"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
