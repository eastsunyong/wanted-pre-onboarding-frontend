import React, { useState } from "react";
import styled from "styled-components";
import SigninBtn from "./SigninBtn";
import SignupBtn from "./SignupBtn";

const AuthForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [massege, setMassege] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  //이메일 유효성
  const EmailCheck = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailCheckReg = /.*@.*/;

    if (!emailCheckReg.test(currentEmail)) {
      setMassege("이메일을 확인해주세요");
    } else {
      setMassege('');
      setEmailValid(true);
    }
  }
    //비밀번호 유효성 유효성
    const PasswordCheck = (e) => {
      const currentPassword = e.target.value;
      setPassword(currentPassword);
      const passwordCheckReg = /^\S{8,}$/;
  
      if (!passwordCheckReg.test(currentPassword)) {
        setMassege("8자 이상입니다");
      } else {
        setMassege('');
        setPasswordValid(true);
      }
    }
  return (
    <>
      <Sort>
        <div>
          <p>이메일</p>
        </div>
        <input
          data-testid="email-input"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={EmailCheck}
        />
      </Sort>
      <Sort>
        <div>
          <p>비밀번호</p>
        </div>
        <input
          data-testid="password-input"
          value={password}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={PasswordCheck}
        />
      </Sort>
      <Msg>
        <label>{massege}</label>
      </Msg>
      {
        props.title === '회원가입' ?  <SignupBtn emailValid={emailValid} passwordValid={passwordValid} email={email} password={password}/> :
        <SigninBtn emailValid={emailValid} passwordValid={passwordValid} email={email} password={password}/>
      }
    </>
  );
};

const Sort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 3rem;
    margin: 0 3rem 0 4rem;
  }

  input {
    width: 30rem;
    height: 3rem;
    border-radius: 0.4rem;
    border: 1px solid gray;
    padding-left: 0.6rem;
    outline: none;
  }

  .unable {
  opacity: .5;
  pointer-events: none;
}
`;

const Msg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
`

export default AuthForm;
