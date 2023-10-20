import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const OnclickHandler = () => {
    if (window.confirm("로그인 하시겠습니까?")) {
      console.log(idValue, passwordValue);
    }
  };
  return (
    <div className="MainLayout">
      <div className="Box">
        <p className="LoginTitle">로그인</p>
        <div className="InputWrap">
          <p>아이디</p>
          <input
            className="Input"
            type="text"
            placeholder="아이디를 입력해주세요."
            value={idValue}
            onChange={(e) => setIdValue(e.target.value)}
          />
        </div>
        <div className="InputWrap">
          <p>비밀번호</p>
          <input
            className="Input"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>
        <button className="LoginButton" onClick={OnclickHandler}>
          로그인
        </button>
        <p>계정이 없으신가요?</p>
      </div>
    </div>
  );
};

export default Login;
