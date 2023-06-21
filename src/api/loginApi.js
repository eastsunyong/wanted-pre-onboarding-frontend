import request from "./axios"

//로그인
export const SigninApi = async (email, password) => {
    const answer = { result: true };
    try {
        const res = await request.post('auth/signin', {email, password})
        const access_token = res.data.access_token
        localStorage.setItem('access_token', access_token)
    } catch(err) {
        console.log(err);
    }
    return answer.result
}

//회원가입
export const SignupApi = async (email, password) => {
    const answer = { result: true };
    try {
        await request.post('auth/signup', {email, password})
    } catch(err) {
        answer.result = false;
        console.log(err);
    }
    return answer.result
}