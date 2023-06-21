import React, {useContext} from 'react'
import { AuthContext } from 'App'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { SigninApi } from 'api/loginApi'

const SigninBtn = ({emailValid , passwordValid, email, password}) => {
    const nav = useNavigate();
    const {setIsLog} = useContext(AuthContext)

    //로그인 api
    const SigninRequst = async (email, password) => {
        const answer = await SigninApi(email, password);
        if(answer) {
            setIsLog(true)
            nav('/todo')
        }else {
            alert('아이디, 비밀번호를 다시 확인해 주세요')
        }
    }
  return (
    <>
        <Button data-testid="signin-button" onClick={()=> {SigninRequst(email, password)}} style={(emailValid && passwordValid) ? { backgroundColor : '#4ec5f4'} : {opacity:".5", pointerEvents:'none'}}>로그인</Button>
        <Wrap>
         <h6 onClick={() => {nav("/signup")}}>회원가입하기</h6>
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

export default SigninBtn