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

async function getData() {
  // https://api.github.com/users/guilherme020205/repos
  const response = await fetch("https://api.github.com/users/guilherme020205/repos");
  return response.json();
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
          <br /> <br />
          
        </div>
      ))}
    </main>
  );
}
