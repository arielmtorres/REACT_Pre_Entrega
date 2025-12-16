import { useState } from 'react'
import { CartContext } from './CartContext.js'

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart(prev => {
      const idx = prev.findIndex(p => String(p.id) === String(item.id))
      if (idx >= 0) {
        const next = [...prev]
        const current = next[idx]
        next[idx] = { ...current, qty: (current.qty ?? 1) + 1 }
        return next
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const clearCart = () => setCart([])

  const getTotalItems = () => cart.reduce((acc, p) => acc + (p.qty ?? 1), 0)

  const getTotalPrice = () =>
    cart.reduce((acc, p) => acc + p.price * (p.qty ?? 1), 0)

  const value = { cart, addItem, clearCart, getTotalItems, getTotalPrice }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
