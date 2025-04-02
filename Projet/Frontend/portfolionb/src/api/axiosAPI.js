import axios from "axios";
import store from "@/stores";

const http = axios.create({
    baseURL: process.env.SERVER_URL
})

http.interceptors.request.use(config =>{
    const {token} = store.getState().auth

    config.headers = {
        'Authorization' : token ? `Bearer ${token}` : '',
    }

    return config
})

export default http