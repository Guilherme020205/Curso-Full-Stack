import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-pizzaria-coral.vercel.app/"
})