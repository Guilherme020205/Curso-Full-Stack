import { cookies } from "next/headers";  

export function getCookieServer() {
    // Tenta obter o cookie chamado "session" e extrai seu valor, caso ele exista.
    const token = cookies().get("session")?.value;

    // Retorna o valor do token ou null se o cookie não existir.
    return token || null;
}
