import "../styles/itemdetail.css";
import { useCartContext } from "../context/useCartContext.js";

export default function ItemDetail({ item }) {
  const { addItem } = useCartContext();

  if (!item) return <p style={{ padding: "1rem" }}>Producto no disponible</p>;

  return (
    <section className="item-detail">
      <img src={item.imageURL} alt={item.name} className="item-detail-img" />

      <div className="item-detail-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className="price">${Number(item.price).toLocaleString("es-AR")}</p>

        <button className="btn-primary" onClick={() => addItem(item)}>
          Agregar al carrito
        </button>
      </div>
    </section>
  );
}
