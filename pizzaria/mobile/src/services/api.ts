import axios from "axios";

const api = axios.create({
    baseURL: 'https://backpizzaria.vercel.app/'
})

export {api}