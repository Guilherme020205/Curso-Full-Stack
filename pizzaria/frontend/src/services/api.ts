import axios from "axios";

export const api = axios.create({
    baseURL: "https://curso-full-stack-eight.vercel.app/"
    // baseURL: "http://localhost:3333"
})