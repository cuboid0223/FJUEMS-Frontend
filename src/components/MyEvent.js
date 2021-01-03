import React from "react";
import EventCard from "./EventCard";
import { Avatar } from "@material-ui/core";
// React Context API
import { useStateValue } from "../StateProvider"; 
import { actionTypes } from "../reducer";
import { useHistory } from "react-router-dom";
const MyEvent = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log("USER: ", user);
  const user_name = sessionStorage.getItem("user_name");
  const user_account = sessionStorage.getItem("user_account");
  const user_auth = sessionStorage.getItem("user_auth");

  const history = useHistory();
  const logout = () => {
    dispatch({
      type: actionTypes.SET_USER,
      user: null, //把 User 丟到 Global State（contextAPI）
    });
    sessionStorage.clear();
    history.push('/')
  }

  return (
    <div className="myEvent">
      <div className="myEvent__aboutMe">
        <Avatar className="myEvent__aboutMe__avatar" />
        <div className="myEvent__aboutMe__Info">
          <h2>{user_name ? user_name : "請先登入"}</h2>
          <p>學號： {user_account ? user_account : "請先登入"}</p>
          <p>權限： {user_auth ? user_auth : "無權限"}</p>
          <input
            type="button"
            value="登出"
            className={
              user_account ? "myEvent__aboutMe__deleteBtn" : "hide-btn"
            }
            onClick={logout}
          />
          <input
            type="button"
            value="刪除帳號"
            className={
              user_account ? "myEvent__aboutMe__deleteBtn" : "hide-btn"
            }
            //onclick={() => alert('kkk')}
          />
          <input
            type="button"
            value="編輯帳密"
            className={
              user_account ? "myEvent__aboutMe__updateBtn" : "hide-btn"
            }
          />
        </div>
      </div>

      <div className="myEvent__countEvents">
        <h2>你當月參加了 6 個活動</h2>
        <p>(總共參加了 6 個活動)</p>
      </div>

      <div className="myEvent__list">
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
    </div>
  );
};

export default MyEvent;
