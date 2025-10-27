# Anime House

Pre-entrega React (Vite) tematizada en **anime**: catálogo por categorías, detalle, **carrito con Context API**, **checkout simulado** con pantalla de confirmación.

## Scripts
```bash
npm install
npm run dev
```

## Rutas
- `/` catálogo
- `/category/:categoryId` (figuras, ropa, mangas)
- `/detail/:id` detalle de producto
- `/cart` carrito
- `/orden-confirmada` confirmación de compra (simulada)

## Notas
- Los productos están en `public/data/products.json`.
- El carrito **acumula cantidades** si agregás el mismo producto varias veces.
- El botón **Comprar** genera un `orderId` y redirige a `/orden-confirmada`, luego limpia el carrito.
