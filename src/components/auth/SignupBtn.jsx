import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { SignupApi } from 'api/loginApi'

const SignupBtn = ({emailValid , passwordValid, email, password}) => {
    const nav = useNavigate();

    //회원가입 api
    const SignupRequst = async (email, password) => {
        const answer = await SignupApi(email, password);
        if(answer) {
            nav("/signin")
            alert("회원가입을 축하드립니다! 로그인 페이지로 이동합니다")
        }else {
            alert('중복되는 이메일입니다')
        }
        }

  return (
    <>
        <Button data-testid="signup-button" onClick={()=> {SignupRequst(email, password)}} style={(emailValid && passwordValid) ? { backgroundColor : '#4ec5f4'} : {opacity:".5", pointerEvents:'none'}}>회원가입</Button>
        <Wrap>
         <h6 onClick={() => {nav("/signin")}}>로그인하기</h6>
        </Wrap>
    </>
  )
}

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
const Wrap = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2rem; 

  h6 {
    margin-top: 1rem;
    font-size: 1.6rem;
    text-decoration: underline;
    cursor: pointer;
  }
`

export default SignupBtn