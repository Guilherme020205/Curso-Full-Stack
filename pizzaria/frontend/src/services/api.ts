import axios from "axios";

export const api = axios.create({
    baseURL: "https://backpizzaria.vercel.app/"
    // baseURL: "http://localhost:3333"
})