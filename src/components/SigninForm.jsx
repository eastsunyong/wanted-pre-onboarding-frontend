import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const nav = useNavigate();

  return (
    <>
      <Sort>
        <div>
          <p>이메일</p>
        </div>
        <input data-testid="email-input"
          name="email"
          placeholder="이메일을 입력해주세요"
        />
      </Sort>
      <Sort>
        <div>
          <p>비밀번호</p>
        </div>
        <input data-testid="password-input"
          name="email"
          placeholder="비밀번호를 입력해주세요"
        />
      </Sort>
      <Button>회원가입</Button>
      <Sort>
        <h6 onClick={()=> {nav("/signup")}}>회원가입 하기</h6>
      </Sort>
    </>
  );
};

const Sort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 3rem;
    margin : 0 3rem 0 4rem;
  }

  input {
    width: 30rem;
    height: 3rem;
    border-radius: 0.4rem;
    border: 1px solid gray;
    padding-left: 0.6rem;
  }

  h6 {
    margin-top: 1rem;
    font-size: 1.6rem;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    margin: 1rem 2rem;
    border: none;
    border-radius: 0.6rem;
    background-color: #4ec5f4;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
`

export default SigninForm;
