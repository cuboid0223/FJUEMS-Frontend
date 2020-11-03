import React from "react";
import DoubleArrowOutlinedIcon from "@material-ui/icons/DoubleArrowOutlined";
import { Link } from "react-router-dom";

const EventCard = ({ photoURL, title, date }) => {
  return (
    <div
      className="eventCard"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${photoURL})`,
        backgroundPosition: "center center",
      }}
    >
      <Link to={`/eventDetail`}>
        <div className="eventCard__info">
          <h3 className="eventCard__title">{title}</h3>
          <div className="eventCard__wrap">
            <p className="eventCard__date">{date}</p>
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
