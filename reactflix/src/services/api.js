import axios from "axios"

// Base da URL: https://api.themoviedb.org/3/
// Url da api: movie/now_playing?api_key=c7601f41b7712a15c05610aca11acccd&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api
