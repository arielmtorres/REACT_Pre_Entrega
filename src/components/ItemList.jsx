import { Link } from 'react-router-dom'
import Item from './Item.jsx'
import '../styles/itemlist.css'

export default function ItemList({ list = [] }) {
  if (!Array.isArray(list) || list.length === 0) {
    return <p style={{padding:'0.5rem'}}>No hay productos.</p>
  }

  return (
    <div className="grid">
      {list.map(prod => (
        <Link key={prod.id} to={`/detail/${prod.id}`} className="card-link">
          <Item {...prod} />
        </Link>
      ))}
    </div>
  )
}
