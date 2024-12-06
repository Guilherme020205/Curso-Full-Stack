import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-pizzaria-coral.vercel.app/'
})

export {api}