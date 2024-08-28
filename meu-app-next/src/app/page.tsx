import { resolve } from "path";
import { Ownerrepo } from '@/components/Ownerrepo';

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

// async function getData() {
//   // https://api.github.com/users/guilherme020205/repos
//   const response = await fetch("https://api.github.com/users/guilherme020205/repos");
//   return response.json();
// }

async function delayFetch(url: string, delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await fetch(url, {next: {revalidate: 120} });
  // const response = await fetch(url, {cache: 'no-cache'});
  return response.json();  
}

async function getData() {
  // https://api.github.com/users/guilherme020205/repos
  const data = await delayFetch("https://api.github.com/users/guilherme020205/repos", 500);
  
  return data;
}

export default async function Home() {
  const data: DataProps[] = await getData(); // Mudando para DataProps[]

  return (
    <main>
      <h1>Página Home</h1>
      <span>Seja bem-vindo à home</span>

      <br />

      <h3>Meus repositórios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositório:  </strong> <a href={item.html_url}>{item.name}</a>
          <br />
          <Ownerrepo
            avatar_url={item.owner.avatar_url}
            name={item.owner.login}
          />
          <br /> 
          
        </div>
      ))}
    </main>
  );
}
