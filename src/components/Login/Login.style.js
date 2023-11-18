import styled from "styled-components";

export const Input = styled.input`
  width: 300px;
  height: 25px;
  font-size: 16px;
  padding: 8px 10px;
  border: 2px solid #c1c1c1;
  border-radius: 10px;
  display: flex;
  margin-left: 4.2vw;
  margin-top: 4.5vh;
`;

export const InputWrap = styled.div`
  margin-bottom: 20px;
`;

export const LoginButton = styled.button`
    width: 150px;
    height: 40px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    border: none;
    border-radius: 10px;
    
    margin-left: 10vw;
    margin-top: 5vh;
    margin-bottom: 10px;
    background: #DA4141;
`;

export const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginTitle = styled.p`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 15px;
  margin-top: 7vw;
  margin-left: 8.5vw;
  color: #da4141;
  font-family: Pretendard;
`;

export const Box = styled.div`
  width: 450px;
  height: 550px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 2px 1px 20px rgba(0, 0, 0, 0.1);
`;

export const SignUpButton = styled.button`
width: 150px;
    height: 40px;  
color: #da4141;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
  border: none;
    border-radius: 10px;
    background: #fff;
    margin-left: 10vw;
    margin-top: 1vh
`;
