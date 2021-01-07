import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";


const EventList = ({events}) => {
  //console.log(events)
  return (
    <div className="eventList">
      <div className="eventList__cardContainer">
        {events.map((event) => (
          <EventCard
            key={event.eve_id}
            eventId={event.eve_id}
            photoURL={event.eve_imgURL}
            title={event.eve_title}
            type={event.eve_type}//
            timeStart={event.eve_timeStart}
            timeEnd={event.eve_timeEnd}
          />
        ))}
      </div>

      <nav
        aria-label="Page navigation example"
        className="eventList__pageContainer"
      >
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="?page=1">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* <EventCard
        photoURL="https://t.kfs.io/organization_resource_files/8544/36955/__________1200x630__1_.jpg"
        title="【 A-Lin 2020《Passenger 旅．課》世界巡迴演唱會 高雄站 】"
        date="2020/02/23"
      /> */}
    </div>
  );
};

export default EventList;
