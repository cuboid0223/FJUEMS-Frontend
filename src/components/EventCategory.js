import React from "react";
import SportsBasketballOutlinedIcon from "@material-ui/icons/SportsBasketballOutlined";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import EuroOutlinedIcon from "@material-ui/icons/EuroOutlined";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import WcOutlinedIcon from "@material-ui/icons/WcOutlined";
const EventCategory = () => {
  return (
    <div className="eventCategory">
      <div className="eventCategory__item">
        <SportsBasketballOutlinedIcon fontSize='large'/>
        <pre>運動</pre>
      </div>
      <div className="eventCategory__item">
        <LocalHospitalOutlinedIcon fontSize='large'/>
        <pre>健康</pre>
      </div>
      <div className="eventCategory__item">
        <FastfoodOutlinedIcon fontSize='large'/>
        <pre>美食</pre>
      </div>
      <div className="eventCategory__item">
        <PublicOutlinedIcon fontSize='large'/>
        <pre>學習</pre>
      </div>
      <div className="eventCategory__item">
        <EuroOutlinedIcon fontSize='large'/>
        <pre>財經</pre>
      </div>
      <div className="eventCategory__item">
        <MusicNoteOutlinedIcon fontSize='large'/>
        <pre>演出</pre>
      </div>
      <div className="eventCategory__item">
        <WcOutlinedIcon fontSize='large'/>
        <pre>人際關係</pre>
      </div>
      <div className="eventCategory__item">
        <MoreHorizOutlinedIcon fontSize='large'/>
        <pre>其他</pre>
      </div>
    </div>
  );
};

export default EventCategory;
