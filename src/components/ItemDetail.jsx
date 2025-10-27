import { useCartContext } from '../context/useCartContext.js'
import '../styles/itemdetail.css'

export default function ItemDetail({ detail }) {
  const { addItem } = useCartContext()

  if (!detail || Object.keys(detail).length === 0) return null

  const { name, price, description, imageURL } = detail

  return (
    <section className="detail">
      <img src={imageURL} alt={description || name} className="detail-img"/>
      <div className="detail-body">
        <h2>{name}</h2>
        <p className="detail-desc">{description}</p>
        <p className="detail-price">${price.toLocaleString('es-AR')}</p>
        <button className="btn" onClick={() => addItem(detail)}>
          Agregar al carrito
        </button>
      </div>
    </section>
  )
}
