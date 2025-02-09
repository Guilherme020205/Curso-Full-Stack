import { useState, useEffect } from 'react'
import './Favoritos.css'
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem("@reactFlix")
        setFilmes(JSON.parse(minhaLista) || [])
    }, []);

    function excluirFilme(id) {
        let filtroFilme = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilme);

        localStorage.setItem("@reactFlix", JSON.stringify(filtroFilme))

        toast.success("Filme removido com sucesso")
    }

    return (
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo!</span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <>
                            <li key={item.id}>
                                <span>{item.title}</span>
                                <div>
                                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                    <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                                </div>
                            </li> 
                            <hr/>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos