import React, { useState } from "react";
import * as S from "./Login.style";

const Login = () => {
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const OnclickHandler = () => {
    if (window.confirm("로그인 하시겠습니까?")) {
      console.log(idValue, passwordValue);
    }
  };
  return (
    <S.MainLayout>
      <S.Box>
        <S.LoginTitle>만나서 반가워요!</S.LoginTitle>
        <br></br>
        <S.InputWrap>
          <S.Input
            type="text"
            placeholder="아이디를 입력하세요."
            value={idValue}
            onChange={(e) => setIdValue(e.target.value)}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </S.InputWrap>
        <S.LoginButton onClick={OnclickHandler}>
          로그인
        </S.LoginButton>
        <br></br>
        <S.SignUpButton>회원가입</S.SignUpButton>
      </S.Box>
    </S.MainLayout>
  );
};

export default Login;
