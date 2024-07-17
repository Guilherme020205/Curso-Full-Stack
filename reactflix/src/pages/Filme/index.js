import './filme-info.css'

import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { toast } from 'react-toastify';


import api from '../../services/api'

function Filme() {

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    const navigate = useNavigate()

    useEffect(() => {

        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'c7601f41b7712a15c05610aca11acccd',
                    language: 'pt-BR',
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false)
                })
                .catch(() => {
                    navigate("/", { replace: true });
                    return;
                })
        }

        loadFilme();

        return () => {
            console.log("COMPONENTE DESMONTADO")
        }

    }, [navigate, id]);

    function salvarFilme(){
          const minhaLista = localStorage.getItem('@reactFlix')

          let filmesSalvos = JSON.parse(minhaLista) || []

          const hasFilme = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme já está na sua lista!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@reactFlix", JSON.stringify(filmesSalvos));
        toast.success('Filme Salvo')

    }

    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        );
    }
    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-button">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target='black' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a></button>
            </div>

        </div>
    )
}

export default Filme