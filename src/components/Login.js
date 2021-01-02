import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// import axios from "../api/axios";
import axios from "axios";
const Login = () => {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm(); // react-hook-form
  const onSubmit = (data) => {
    console.log(data);
    const formData = data;
    axios
      .post("http://localhost:8888/fjuems/fjuems-backend/login.php", formData)
      .then((res) => {
        const user = res.data; //
        setUser(user);
        console.log(user)
      })
      .catch((err) => console.log(err));
    if (user != null) {
      history.push("/");
    }
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("account", account);
    formData.append("password", password);
    axios
      .post("http://localhost:8888/fjuems/fjuems-backend/login.php", formData)
      .then((res) => {
        const name = res.data; //
        console.log(name);
      }) 
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    
  },[])
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

      <h1 className="login__logo ">註冊</h1>
      <form
        // action="/fjuems-backend/resign.php"
        className="login__form"
        // method="post"
      >
        姓名：
        <input
          type="text"
          name="resign_name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        帳號：
        <input type="text" name="resign_account" required />
        <br />
        密碼：
        <input type="password" name="resign_password" required />
        <br />
        <input
          type="submit"
          value="註冊"
          className="login__btn"
          onClick={registerSubmit}
        />
      </form>
    </div>
  );
};

export default Login;
