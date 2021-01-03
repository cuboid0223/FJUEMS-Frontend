import React, { useState } from "react";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
// const input = "# This is a header\n\nAnd this is a paragraph";
// const markdown =  "This ~is not~ strikethrough, but ~~this is~~!";
const AddEvent = () => {
const [input, setInput] = useState("")
  return (
    <div className="addEvent">
      <div className="addEvent__wrapper">
        <form className="addEvent__leftContainer">
          <div className="addEvent__item">
            <p>新增活動封面: </p>
            <input type="file" />
          </div>
          <div className="addEvent__item">
            <p>活動標題: </p>
            <input type="text" />
          </div>
          <div className="addEvent__item">
            <p>活動時間: </p>
            <input type="date" /> ~
            <input type="date" />
          </div>
          <div className="addEvent__item">
            <p>人數上限: </p>
            <input type="number" />
          </div>

          <textarea onChange={(e) => setInput(e.target.value)} />
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
