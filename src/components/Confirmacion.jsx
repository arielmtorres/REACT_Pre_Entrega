import { useLocation, Link } from 'react-router-dom'

export default function Confirmacion() {
  const location = useLocation()
  const orderId = location?.state?.orderId

  return (
    <section className="container">
      <h2>Compra realizada</h2>
      {orderId
        ? <p>¡Gracias por tu compra! Tu número de pedido es <strong>#{orderId}</strong>.</p>
        : <p>Tu compra fue registrada. (No se encontró el número de pedido en el estado de navegación)</p>
      }
      <p><Link to="/">Volver al catálogo</Link></p>
    </section>
  )
}
