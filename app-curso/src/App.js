import { useState, useEffect } from 'react';

function App() {

  const [input, setInput] = useState('')

  const [tarefas, setTarefas] = useState([
    'Pagar luz',
    'Estudar react'
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, []);



  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);

  function cadastrando(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);

    setInput('');
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={cadastrando}>

        <label>Nome da tarefa</label><br />
        <input
          placeholder='tarefa...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br /><br />

        <button type='submit'>Registrar</button>
      </form>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))

        }
      </ul>

    </div>
  );
}

export default App

