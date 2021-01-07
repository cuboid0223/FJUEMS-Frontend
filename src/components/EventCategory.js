import React from "react";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import EuroOutlinedIcon from "@material-ui/icons/EuroOutlined";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import WcOutlinedIcon from "@material-ui/icons/WcOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import ComputerIcon from "@material-ui/icons/Computer";
import axios from "axios";
import { useForm } from "react-hook-form";
const EventCategory = () => {
  const { register, handleSubmit, errors } = useForm(); // react-hook-form
  const onTypeClick = () => {
    console.log('click');

    //  axios
    //    .get(
    //      `http://localhost:8888/fjuems/fjuems-backend/updateEvent.php?eventID=${id}`,
    //      formData
    //    )
    //    .then((res) => {
    //      const data = res.data; //

    //    })
    //    .catch((err) => console.log(err));
  };
  return (
    // create new components  named eventCategoryItem
    // not hardcore, get data from EVENTS_TYPES
    <div className="eventCategory">
      <div className="eventCategory__item" onClick={onTypeClick}>
        <ComputerIcon fontSize="large" />
        資訊
      </div>
      <div className="eventCategory__item">
        <LocalHospitalOutlinedIcon fontSize="large" />
        <pre>保健</pre>
      </div>
      <div className="eventCategory__item">
        <SupervisedUserCircleIcon fontSize="large" />
        <pre>哲理</pre>
      </div>
      <div className="eventCategory__item">
        <PublicOutlinedIcon fontSize="large" />
        <pre>學習</pre>
      </div>
      <div className="eventCategory__item">
        <EuroOutlinedIcon fontSize="large" />
        <pre>財經</pre>
      </div>
      <div className="eventCategory__item">
        <MusicNoteOutlinedIcon fontSize="large" />
        <pre>音樂</pre>
      </div>
      <div className="eventCategory__item">
        <WcOutlinedIcon fontSize="large" />
        <pre>人際關係</pre>
      </div>
      <div className="eventCategory__item">
        <MoreHorizOutlinedIcon fontSize="large" />
        <pre>其他</pre>
      </div>
    </div>
  );
};

export default EventCategory;
