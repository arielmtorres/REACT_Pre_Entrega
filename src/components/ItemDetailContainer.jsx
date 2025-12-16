import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getProductById } from "../services/products.js";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getProductById(id);
        if (!alive) return;
        setProduct(data);
      } catch (e) {
        if (!alive) return;
        setError(e?.message || "Error cargando producto");
        setProduct(null);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [id]);

  if (loading) return <p style={{ padding: "1rem" }}>Cargando detalle...</p>;
  if (error) return <p style={{ padding: "1rem", color: "crimson" }}>{error}</p>;
  if (!product) return null;

  return <ItemDetail item={product} />;
}
