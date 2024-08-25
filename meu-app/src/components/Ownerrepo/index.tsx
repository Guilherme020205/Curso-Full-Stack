"use client"

import { useState } from "react"
import Image from "next/image"

interface OwnerrepoProps {
    avatar_url: string,
    name: string,
}

export function Ownerrepo({ avatar_url, name }: OwnerrepoProps) {
    const [show, setShow] = useState(false); // Corrigido aqui

    return (
        <div>
            {show && (
                <>
                    <Image
                        src={avatar_url}
                        alt="Foto avatar"
                        width={50}
                        height={50}
                        style={{ borderRadius: 10 }}
                    />
                    <strong>{name}</strong>
                </>
            )}

            <button onClick={ () => setShow(!show)}>
                {show ? "Ocultar nome" : "Mostrar nome"}
            </button>

        </div>
    )
}
