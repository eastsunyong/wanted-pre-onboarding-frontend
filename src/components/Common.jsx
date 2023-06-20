import React from "react";
import styled from "styled-components";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

const Common = (props) => {
  return (
    <Wrap>
      <Containar>
        <h3>{props.title}</h3>
        {props.title === "로그인" ? <SigninForm /> : <SignupForm />}
      </Containar>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Containar = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: 28rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(17, 24, 39, 0.25);
  box-shadow: 0px 5px 8px rgba(17, 24, 39, 0.25);

  h3 {
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
    padding-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export default Common;
