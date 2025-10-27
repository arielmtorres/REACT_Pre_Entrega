import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList.jsx'

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch('/data/products.json')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar productos')
        return res.json()
      })
      .then(data => {
        const list = categoryId ? data.filter(p => p.category === categoryId) : data
        setProducts(list)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [categoryId])

  if (loading) return <p style={{padding:'1rem'}}>Cargando productos...</p>
  if (error) return <p style={{padding:'1rem', color:'crimson'}}>Error: {error}</p>

  return (
    <section className="list-container">
      <h1>Catálogo Anime {categoryId ? `– ${categoryId}` : ''}</h1>
      <ItemList list={products} />
    </section>
  )
}
