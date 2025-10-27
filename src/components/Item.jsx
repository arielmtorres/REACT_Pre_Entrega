import '../styles/item.css'

export default function Item({ name, price, description, imageURL }) {
  return (
    <article className="card">
      <img src={imageURL} alt={description || name} className="card-img"/>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-desc">{description}</p>
        <p className="card-price">${price.toLocaleString('es-AR')}</p>
      </div>
    </article>
  )
}
