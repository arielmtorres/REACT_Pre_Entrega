import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'
import Confirmacion from './components/Confirmacion.jsx'

// 👇 agregar imports
import Login from './pages/Login.jsx'
import ProductForm from './pages/ProductForm.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orden-confirmada" element={<Confirmacion />} />

          {/* ✅ NUEVO ADMIN */}
          <Route path="/admin" element={<Login />} />
          <Route
            path="/admin/alta-productos"
            element={
              <ProtectedRoute>
                <ProductForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={<h2 style={{ padding: '1rem' }}>404 - Página no encontrada</h2>}
          />
        </Routes>
      </main>
    </>
  )
}

