import { useCartContext } from '../context/useCartContext.js'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const { cart, clearCart, getTotalPrice } = useCartContext()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return <section className="container"><h2>Carrito</h2><p>No hay productos.</p></section>
  }

  const handleBuy = () => {
    const orderId = Math.floor(Math.random() * 900000 + 100000)
    navigate('/orden-confirmada', { state: { orderId } })
    clearCart()
  }

  return (
    <section className="container">
      <h2>Carrito</h2>
      <ul>
        {cart.map((p) => (
          <li key={p.id}>
            {p.name} — ${p.price.toLocaleString('es-AR')} × {p.qty ?? 1} = {(p.price * (p.qty ?? 1)).toLocaleString('es-AR')}
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${getTotalPrice().toLocaleString('es-AR')}</p>
      <button onClick={handleBuy}>Comprar</button>
      <button onClick={clearCart} style={{marginLeft: 8}}>Vaciar</button>
    </section>
  )
}
