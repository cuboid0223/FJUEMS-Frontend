import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
const EventList = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8888/fjuems/fjuems-backend/eventData.php")
      .then((res) => {
        const data = res.data; //
        setEvents(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  },[]);
  // const listOfEvent = events.map((eve_title, eve_imgURL) => (
  //   <EventCard photoURL={eve_imgURL} title={eve_title} date="2020/02/23" />
  // ));

  return (
    <div className="eventList">
      {/* {listOfEvent} */}
      {events.map((event) => (
        <EventCard
          key={event.eve_id}
          photoURL={event.eve_imgURL}
          title={event.eve_title}
          dateStart={event.eve_dateStart}
          dateEnd={event.eve_dateEnd}
          timeStart={event.eve_timeStart}
          timeEnd={event.eve_timeEnd}
        />
      ))}
      {/* <EventCard
        photoURL="https://t.kfs.io/organization_resource_files/8544/36955/__________1200x630__1_.jpg"
        title="【 A-Lin 2020《Passenger 旅．課》世界巡迴演唱會 高雄站 】"
        date="2020/02/23"
      /> */}
    </div>
  );
};

export default EventList;
