import { NextRequest, NextResponse } from "next/server"; // Importa objetos necessários para trabalhar com requisições e respostas.
import { getCookieServer } from "./lib/cookieServer"; // Importa a função getCookieServer, que recupera o cookie "session".
import { api } from "./services/api"; // Importa a API para fazer chamadas HTTP.

export async function middleware(req: NextRequest) {
    // Extrai o caminho (pathname) da URL da requisição.
    const { pathname } = req.nextUrl;

    // Permite continuar a navegação normalmente se o caminho começar com "/_next" ou for a página raiz "/".
    if (pathname.startsWith("/_next") || pathname === "/") {
        return NextResponse.next();
    }

    // Recupera o token de sessão do cookie.
    const token = getCookieServer();

    // Se o usuário estiver tentando acessar o dashboard sem estar logado (sem token), redireciona para a página de login.
    if (pathname.startsWith("/dashboard")) {
        if (!token) {
            return NextResponse.redirect(new URL("/", req.url)); // Redireciona para a página inicial.
        }

        // Valida o token para garantir que ele é válido.
        const isValid = await validateToken(token);

        // Se o token for inválido, redireciona para a página inicial.
        if (!isValid) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        // Se tudo estiver correto, continua a navegação para o dashboard.
        return NextResponse.next();
    }
}

// Função auxiliar para validar o token de sessão.
async function validateToken(token: string) {
    // Se não houver token, retorna falso (token inválido).
    if (!token) return false;

    try {
        // Faz uma requisição à API para verificar se o token é válido.
        await api.get("/me", {
            headers: {
                Authorization: `Bearer ${token}`, // Passa o token no cabeçalho da requisição.
            },
        });

        // Se a requisição for bem-sucedida, o token é válido.
        return true;
    } catch (err) {
        console.log(err); // Exibe o erro no console se houver falha.
        return false; // Retorna falso se houver erro (token inválido).
    }
}
