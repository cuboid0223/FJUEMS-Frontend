import React, { useState } from "react";

const Login = () => {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  return (
    <div className="login">
      <h1 className="login__logo">FJUEMS 登入</h1>

      <form
        action="/fjuems-backend/login.php"
        className="login__form"
        method="post"
      >
        LDAP 帳號：
        <input type="text" name="account" required />
        <br />
        LDAP 密碼：
        <input type="password" name="password" required />
        <br />
        <input
          type="submit"
          value="登入"
          disabled={submitDisabled ? true : false}
          className='login__btn'
        />
        {/* google login ?*/}
        {/* facebook login ?*/}
        {/*  <a href='#'>立即註冊</a> */}
      </form>

      <h1 className="login__logo ">註冊</h1>
      <form
        action="/fjuems-backend/resign.php"
        className="login__form"
        method="post"
      >
        姓名：
        <input type="text" name="resign_name" required />
        <br />
        帳號：
        <input type="text" name="resign_account" required />
        <br />
        密碼：
        <input type="password" name="resign_password" required />
        <br />
        <input type="submit" value="註冊" className='login__btn'/>
      </form>
    </div>
  );
};

export default Login;
