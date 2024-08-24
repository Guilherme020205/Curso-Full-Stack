"use client"

import { useEffect, useState } from "react"
interface DataProps {
    id: number;
    name: string;
    full_name: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
    };
    html_url: string;
}

export default function Repositorio() {

    const [repos, setRepos] = useState<DataProps[]>([])

    useEffect(() => {
        function getData() {
            // https://api.github.com/users/guilherme020205/repos
            fetch("https://api.github.com/users/guilherme020205/repos")
                .then(response => response.json())
                .then((data) => {
                    setRepos(data)
                })

        }
        setTimeout(() => { getData(); }, 2000)
    }, [])


    return (
        <div>
            <h1>Pagina repositórios</h1>

            {repos.map((item) => (
                <div key={item.id}>
                    <strong>Repositório:  </strong> <a href={item.html_url}>{item.name}</a>
                    <br /> <br />

                </div>
            ))}

        </div>
    )
}