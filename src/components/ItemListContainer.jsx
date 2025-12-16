import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { getProducts } from "../services/products.js";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getProducts(categoryId)
      .then((data) => {
        setList(Array.isArray(data) ? data : []);
      })
      .catch((e) => {
        setError(e.message || "Error cargando productos");
        setList([]);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p style={{ padding: "1rem" }}>Cargando...</p>;
  if (error) return <p style={{ padding: "1rem" }}>{error}</p>;

  return <ItemList list={list} />;
}
