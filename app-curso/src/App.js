import { useState } from 'react';

function App() {

  const [titulo, setTitulo] = useState('')
  const [duracao, setDuracao] = useState('')
  const [capa, setCapa] = useState('')

  const [filme, setFilme] = useState({})

  function cadFilme(e) {
    e.preventDefault()
    alert("Cadastrado")

    setFilme({
      titulo: titulo,
      duracao: duracao,
      capa: capa
    })

  }

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={cadFilme}>
        <label>Titulo do filme</label><br />
        <input
          placeholder='ex: avatar'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        /><br /><br />

        <label>Duração do filme</label><br />
        <input
          placeholder='ex: 155 minutos'
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
        /><br /><br />

        <label>Capa do filme</label><br />
        <input
          placeholder='link da capa'
          value={capa}
          onChange={(e) => setCapa(e.target.value)}
        /><br /><br />

        <button type='submit'>Registrar</button>
      </form>
      <div>
        <h1>Titulo {filme.titulo}</h1>
        <p>Duração {filme.duracao} minutos</p>
        <img src={filme.capa} />
      </div>

    </div>
  );
}

export default App

