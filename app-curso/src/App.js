import { useState } from 'react';

import Nome from "./components/Nome";

function App() {
  const [nome, setNome] = useState('Gui')

  function mudaNome() {
    setNome('Gu')
  }

  return (
    <div>
      <h1>Opaaaaa</h1>
      <Nome nome={nome} />
      <button onClick={mudaNome}>Mudar nome</button>
    </div>
  );
}

export default App

