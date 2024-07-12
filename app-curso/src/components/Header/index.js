import './style.css'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>
            <h2>Teste Header</h2>
            <div className='menu'>
                <Link to='/'>Home</Link>
                <Link to='/Sobre'>Sobre</Link>
            </div>
        </header>
    );
  }
  
  export default Header
  
  