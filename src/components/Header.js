import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
const Header = () => {
  const user_auth = sessionStorage.getItem("user_auth");
 
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
          <input type="text" placeholder="搜尋活動" />
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
