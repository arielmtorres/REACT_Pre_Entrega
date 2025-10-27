import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'

export default function ItemDetailContainer() {
  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch('/data/products.json')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar producto')
        return res.json()
      })
      .then(data => {
        const found = data.find(p => String(p.id) == String(id))
        if (found) setDetail(found)
        else throw new Error('Producto no encontrado')
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p style={{padding:'1rem'}}>Cargando detalle...</p>
  if (error) return <p style={{padding:'1rem', color:'crimson'}}>Error: {error}</p>

  return <ItemDetail detail={detail} />
}
