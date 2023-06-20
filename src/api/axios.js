import axios from "axios"

const request = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop/',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 2000,
})

export default request