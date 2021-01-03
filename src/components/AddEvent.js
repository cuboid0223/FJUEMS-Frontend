import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useHistory } from "react-router-dom";
import axios from "axios";
// const input = "# This is a header\n\nAnd this is a paragraph";
// const markdown =  "This ~is not~ strikethrough, but ~~this is~~!";
const AddEvent = () => {
  const [input, setInput] = useState("");
  const { register, handleSubmit, errors } = useForm(); // react-hook-form
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    const formData = data;
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
    history.push("/");
  };
  return (
    <div className="addEvent">
      <div className="addEvent__wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="addEvent__leftContainer"
        >
          <div className="addEvent__item">
            <p>新增活動封面: </p>
            <input type="text" name="file_input" />
          </div>
          <div className="addEvent__item">
            <p>活動標題: </p>
            <input
              type="text"
              name="title_input"
              ref={register({ required: true })}
            />
            {errors.title_input && "Title is required."}
          </div>
          <div className="addEvent__item">
            <p>活動時間: </p>
            <input
              type="datetime-local"
              name="datetime_Start"
              ref={register({ required: true })}
            />
            {errors.datetime_Start && "dateTime is required."}
            ~
            <input
              type="datetime-local"
              name="datetime_End"
              ref={register({ required: true })}
            />
            {errors.datetime_End && "dateTime is required."}
          </div>
          <div className="addEvent__item">
            <p>人數上限: </p>
            <input
              type="number"
              name="limit_input"
              ref={register({ required: true })}
            />
            {errors.limit_input && "limit is required."}
          </div>

          <textarea
            name="description_textarea"
            onChange={(e) => setInput(e.target.value)}
            ref={register({ required: true })}
          />
          {errors.description_textarea && "description is required."}
          <input type="submit" value="新增" className="addEvent__btn" />
        </form>

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
