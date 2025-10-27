import { Link } from 'react-router-dom'
import { useCartContext } from '../context/useCartContext.js'
import '../styles/nav.css'

export default function Nav() {
  const { getTotalItems } = useCartContext()

  return (
    <header className="nav">
      <nav className="nav-inner">
        <Link to="/" className="brand">Anime House</Link>
        <ul className="menu">
          <li><Link to="/category/figuras">Figuras</Link></li>
          <li><Link to="/category/ropa">Ropa</Link></li>
          <li><Link to="/category/mangas">Mangas</Link></li>
          <li className="cart">
            <Link to="/cart">Carrito</Link>
            {getTotalItems() > 0 && <span className="badge">{getTotalItems()}</span>}
          </li>
        </ul>
      </nav>
    </header>
  )
}
