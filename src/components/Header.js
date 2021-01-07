import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import axios from "axios";
const Header = () => {
  const user_auth = sessionStorage.getItem("user_auth");
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  //dispatch term
  const searchEvent = (e) => {
    dispatch({
      type: actionTypes.SET_SEARCHQUERY,
      query: e.target.value, //把 events 丟到 Global State（contextAPI）
    });
    history.push("./eventSearch");
    // axios
    //   .get(
    //     `http://localhost:8888/fjuems/fjuems-backend/searchEvent.php?q=${term}`
    //   )
    //   .then((res) => {
    //     const events = res.data;
    //     console.table(events);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // history.push('/eventSearch')
  };
  return (
    <div className="header">
      <MenuIcon fontSize="large" className="header__burgerIcon" />
      <Link to="/">
        <h1 className="header__logo">FJUEMS</h1>
      </Link>

      <div className="header__wrap">
        <ul className="header__list">
          <hr />
          {user_auth == "admin" ? (
            <>
              <li>
                <Link to="/">首頁</Link>
              </li>

              <li>
                <Link to="/login">登入</Link>
              </li>

              <li>
                <Link to="/addEvent">新增活動</Link>
              </li>
              <li>
                <Link to="/userAdmin">管理會員</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">首頁</Link>
              </li>
              <li>
                <Link to="/login">登入</Link>
              </li>
            </>
          )}
        </ul>
        <div className="header__search">
          <input type="text" placeholder="搜尋活動" onChange={searchEvent} />
          <SearchIcon className="header__search__icon" fontSize="large" />
        </div>
      </div>
      <Link to="/myEvent">
        <div className="header__notification">
          <NotificationsActiveIcon
            fontSize="large"
            className="NotificationsActiveIcon"
          />
          <p className="header__counter">3</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
