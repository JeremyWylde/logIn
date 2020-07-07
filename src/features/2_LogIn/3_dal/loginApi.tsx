import axios from "axios";

type responseType = {
    addedUser: {email: string, isAdmin: boolean, __v: number, _id: string, token: string}
    success: boolean,
    token: string
};

export const AuthorizationAPI = {
    login(email: string | null, password: string | null, rememberMe: boolean | null) {
        return axios.post<responseType>(`https://cards-nya-back.herokuapp.com/1.0/auth/login`, {email, password, rememberMe})
    },
    authMe(){
        return axios.post<responseType>('https://cards-nya-back.herokuapp.com/1.0/auth/me',{
            token: document.cookie})
    }
};