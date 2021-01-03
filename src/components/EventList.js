import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";


const EventList = ({events}) => {
  //console.log(events)
  return (
    <div className="eventList">
      {events.map((event) => (
        <EventCard
          key={event.eve_id}
          eventId={event.eve_id}
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
