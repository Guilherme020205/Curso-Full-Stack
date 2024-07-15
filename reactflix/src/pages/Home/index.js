import { useEffect, useState } from 'react'
import api from '../../services/api';
// Url da api: movie/now_playing?api_key=c7601f41b7712a15c05610aca11acccd&language=pt-BR

function Home() {
    const { filmes, setFilmes } = useState([])

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: 'c7601f41b7712a15c05610aca11acccd',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            console.log(response.data.results)

        }
        loadFilmes();

    }, []);

    return (
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home