import axios from "axios";

const api = axios.create({
    baseURL: 'https://curso-full-stack-eight.vercel.app/'
})

export {api}