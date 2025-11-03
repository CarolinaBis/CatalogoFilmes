import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <header className="Menu">
      <h2>CATÁLOGO DE FILMES</h2>
      <ul className="menu">
        <li><Link to="/">INÍCIO</Link></li>
        <li><Link to="/create">CRIAR</Link></li>
        <li><Link to="/update">ALTERAR</Link></li>
        <li><Link to="/delete">APAGAR</Link></li>
      </ul>
    </header>
  )
}

export default Menu