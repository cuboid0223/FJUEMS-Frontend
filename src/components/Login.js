import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { Link } from "react-router-dom";
// import axios from "../api/axios";
import axios from "axios";
const Login = () => {
  // const [submitDisabled, setSubmitDisabled] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const { register, handleSubmit, errors } = useForm(); // react-hook-form
  //登入功能
  const onSubmit = (data) => {
    //console.log(data);
    const formData = data;
    axios
      .post("http://localhost:8888/fjuems/fjuems-backend/login.php", formData)
      .then((res) => {
        const user = res.data; //
        if (user.user_id != null || user.user_id != "undefined") {
          setUser(user);
          sessionStorage.setItem("user", user);
          sessionStorage.setItem("user_id", user.user_id);
          sessionStorage.setItem("user_name", user.user_name);
          sessionStorage.setItem("user_account", user.user_account);
          sessionStorage.setItem("user_auth", user.auth_name);
          dispatch({
            type: actionTypes.SET_USER,
            user: JSON.parse(JSON.stringify(user)), //把 User 丟到 Global State（contextAPI）
          });
          alert("登入成功")
          history.push("/");
        }
        console.log("User: ", user);
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="login">
      <h1 className="login__logo">FJUEMS 登入</h1>

      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        LDAP 帳號：
        <input type="text" name="account" ref={register({ required: true })} />
        <br />
        {errors.account && "Account is required."}
        LDAP 密碼：
        <input
          type="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && "Password is required."}
        <br />
        <input
          type="submit"
          value="登入"
          //disabled={submitDisabled ? true : false}
          className="login__btn"
        />
      </form>
      <Link to="/register">註冊帳號</Link>
    </div>
  );
};

export default Login;
