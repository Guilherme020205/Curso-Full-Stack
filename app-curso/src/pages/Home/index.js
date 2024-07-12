import {Link} from 'react-router-dom'

function Home() {

    return (
      <div>
        <h1>Teste Home</h1>
        <br/><br/><br/>

        <Link to='/Sobre'>Sobre</Link>
        <hr/>

        <Link to='/Produto/15'>Produto 15</Link>
      </div>
    );
  }
  
  export default Home
  
  