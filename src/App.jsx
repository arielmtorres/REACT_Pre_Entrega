import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'
import Confirmacion from './components/Confirmacion.jsx'
import { CartProvider } from './context/CartProvider.jsx'

export default function App() {
  return (
    <CartProvider>
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orden-confirmada" element={<Confirmacion />} />
          <Route path="*" element={<h2 style={{padding:'1rem'}}>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </CartProvider>
  )
}
