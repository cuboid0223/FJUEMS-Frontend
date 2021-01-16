import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useHistory } from "react-router-dom";
import axios from "axios";
import moment from "moment"; // moment.js to format my website dateTime to match the db time format
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const AddEvent = () => {
  const [input, setInput] = useState(""); // react MarkDown State
  const { register, handleSubmit, errors } = useForm(); // react-hook-form
  const history = useHistory(); // react-rooter
  const [{ updateEvent }, dispatch] = useStateValue(); // context-api

  //console.log(Event_title);
  const id = sessionStorage.getItem("eventId");
  const title = sessionStorage.getItem("eventTitle");
  const imgURL = sessionStorage.getItem("eventImgURL");
  const description = sessionStorage.getItem("eventDes");
  const timeStart = sessionStorage.getItem("eventTimeStart");
  const timeEnd = sessionStorage.getItem("eventTimeEnd");
  const limit = sessionStorage.getItem("eventLimit");
  const type = sessionStorage.getItem("eventType");//
  const typeId =  sessionStorage.getItem("eventTypeId");
  const user_id = sessionStorage.getItem("user_id");
  //渲染markdown 語法
  const renderMarkDown = (e) => {
    setInput(e.target.value);
  };

  //新增活動
  const onSubmit = (data) => {
    //console.log(data);
    const formData = data;
    formData["user_id"] = user_id;
    // if 判斷是否按下 update 按鈕
    if (updateEvent) {
      //修改活動
      axios
        .post(
          `http://localhost:8888/fjuems/fjuems-backend/updateEvent.php?eventID=${id}`,
          formData
        )
        .then((res) => {
          const data = res.data; //
          //console.log(data);
          dispatch({
            type: actionTypes.SET_UPDATEEVENT,
            updateEvent: false,
          });
        })
        .catch((err) => console.log(err));
    } else {
      //新增活動
      axios
        .post(
          "http://localhost:8888/fjuems/fjuems-backend/addEvent.php",
          formData
        )
        .then((res) => {
          const data = res.data; //
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
    history.push("/");
    window.location.reload();
  };
  return (
    <div className="addEvent">
      <div className="addEvent__wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="addEvent__leftContainer"
        >
          <input
            type="text"
            readOnly={true}
            defaultValue={updateEvent ? id : ""}
            hidden={true}
          />
          <textarea
            name="description_textarea"
            onChange={renderMarkDown}
            ref={register({ required: true })}
            defaultValue={updateEvent ? description : ""}
          />
          {errors.description_textarea && "description is required."}

          <div className="addEvent__item">
            <p>新增活動封面: </p>
            <input
              type="text"
              name="file_input"
              ref={register()}
              defaultValue={updateEvent ? imgURL : ""}
            />
          </div>
          <div className="addEvent__item">
            <p>活動標題: </p>
            <input
              type="text"
              name="title_input"
              ref={register({ required: true })}
              defaultValue={updateEvent ? title : ""}
            />
            {errors.title_input && "Title is required."}
          </div>
          <div className="addEvent__item">
            <label for="type">活動類别:</label>
            <select
              id="type"
              ref={register({ required: true })}
              name="type_input"
              defaultValue={updateEvent ? type : ""}
            >
              {/* hardcore, get data from db */}
              <option></option>
              <option value="1">音樂</option>
              <option value="2">哲理</option>
              <option value="3">財經</option>
              <option value="4" {...(type == "4" ? "selected" : "")}>
                保健
              </option>
              <option value="5">人際關係</option>
              <option value="6">學習</option>
              <option value="7">資訊</option>
              <option value="8">其他</option>
            </select>
            {errors.type_input && "請選擇類別"}
          </div>

          <div className="addEvent__item">
            <p>活動時間: </p>
            <input
              type="datetime-local"
              name="datetime_Start"
              ref={register({ required: true })}
              defaultValue={
                updateEvent ? moment(timeStart).format("YYYY-MM-DDTkk:mm") : ""
              } //格式化
            />
            ~
            <input
              type="datetime-local"
              name="datetime_End"
              ref={register({ required: true })}
              defaultValue={
                updateEvent ? moment(timeEnd).format("YYYY-MM-DDTkk:mm") : ""
              } //格式化
            />
            {errors.datetime_Start && "dateTime is required."}
            {errors.datetime_End && "dateTime is required."}
          </div>
          <div className="addEvent__item">
            <p>人數上限: </p>
            <input
              type="number"
              name="limit_input"
              ref={register({ required: true })}
              defaultValue={updateEvent ? limit : ""}
            />
            {errors.limit_input && "limit is required."}
          </div>

          {/* 送出 */}
          {updateEvent ? (
            <input
              type="submit"
              value="修改"
              name="update"
              className="addEvent__btn"
              // onClick={handleUpdateEvent}
            />
          ) : (
            <input type="submit" value="新增" className="addEvent__btn" />
          )}
        </form>

        {/* Markdown 語法 */}
        <div className="addEvent__markdown">
          <ReactMarkdown
            plugins={[[gfm, { singleTilde: false }]]}
            source={input}
          />
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
