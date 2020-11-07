import React from "react";
import EventCard from "./EventCard";

const EventList = () => {
  return (
    <div className="eventList">
      <EventCard
        photoURL="https://t.kfs.io/organization_resource_files/8544/36955/__________1200x630__1_.jpg"
        title="【 A-Lin 2020《Passenger 旅．課》世界巡迴演唱會 高雄站 】"
        date="2020/02/23"
      />

      <EventCard
        photoURL="https://t.kfs.io/upload_images/119666/______1200x630_large.jpg"
        title="【高雄場】聽都沒聽過的巡迴"
        date="2020/10/16(周五) 20:00(+0800) ~ 22:00(+0800)"
      />
      <EventCard
        photoURL="https://t.kfs.io/upload_images/120150/____large.jpg"
        title="REDBULL TURN IT UP 台中吃漢場"
        date="2020/10/17(周六) 16:00(+0800) "
      />
      <EventCard
        photoURL="https://t.kfs.io/organization_resource_files/8544/36955/__________1200x630__1_.jpg"
        title="【 A-Lin 2020《Passenger 旅．課》世界巡迴演唱會 高雄站 】"
        date="2020/02/23"
      />

      <EventCard
        photoURL="https://t.kfs.io/upload_images/119666/______1200x630_large.jpg"
        title="【高雄場】聽都沒聽過的巡迴"
        date="2020/10/16(周五) 20:00(+0800) ~ 22:00(+0800)"
      />
      <EventCard
        photoURL="https://t.kfs.io/upload_images/120150/____large.jpg"
        title="REDBULL TURN IT UP 台中吃漢場"
        date="2020/10/17(周六) 16:00(+0800) "
      />
    </div>
  );
};

export default EventList;
