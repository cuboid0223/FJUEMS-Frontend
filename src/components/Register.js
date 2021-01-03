import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import axios from "axios";
const Register = () => {
  const [password, setPassword] = useState("");
  //const [password2, setPassword2] = useState("");
  //const [submitDisabled, setSubmitDisabled] = useState(true);
  const history = useHistory();
  const [{}, dispatch] = useStateValue();
  const { register, handleSubmit, errors } = useForm(); // react-hook-form

  //註冊功能
  const registerSubmit = (data) => {
    //console.log(data);
    const formData = data;
    axios
      .post(
        "http://localhost:8888/fjuems/fjuems-backend/register.php",
        formData
      )
      .then((res) => {
        const data = res.data; //
        //console.log(data);
      })
      .catch((err) => console.log(err));
    history.push("/login");
  };

  return (
    <div className="register">
      <h1 className="login__logo ">註冊</h1>
      <form onSubmit={handleSubmit(registerSubmit)} className="login__form">
        姓名：
        <input
          type="text"
          name="resign_name"
          ref={register({ required: true })}
        />
        {errors.resign_name && "Name is required."}
        <br />
        帳號：
        <input
          type="text"
          name="resign_account"
          ref={register({ required: true })}
        />
        {errors.resign_account && "Account is required."}
        <br />
        密碼：
        <input
          type="password"
          name="resign_password"
          ref={register({ required: true })}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errors.resign_password && "Password is required."}
        <br />
        {/* 密碼2：
        <input
          type="password"
          name="resign_password_twice"
          ref={register({ required: true })}
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
        />
        {errors.resign_password && "Password2 is required."} */}
        <input
          type="submit"
          value="註冊"
          className="login__btn"  
          //disabled={submitDisabled && "disabled"}
        />
      </form>
    </div>
  );
};

export default Register;
