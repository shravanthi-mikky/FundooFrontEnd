import axios from 'axios'

export const signUp = (obj) => {
    let response = axios.post('https://localhost:44340/Register',obj)
    return response
}
export const signIn = (obj) => {

    let response = axios.post('https://localhost:44340/Login',obj)
    console.log(obj)
    return response
}