import { useState } from "react";
import { createProduct } from "../services/products.js";

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    imageURL: "",
    category: "figuras",
  });

  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");

    try {
      const payload = {
        ...form,
        price: Number(form.price),
      };

      const created = await createProduct(payload);
      setMsg(`Producto creado (id: ${created.id}) ✅`);

      setForm({
        name: "",
        price: "",
        description: "",
        imageURL: "",
        category: "figuras",
      });
    } catch (error) {
      setErr(error.message || "Error creando producto");
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: 520 }}>
      <h2>Alta de productos</h2>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: "0.6rem" }}>
        <input name="name" value={form.name} onChange={onChange} placeholder="Nombre" required />
        <input name="price" value={form.price} onChange={onChange} placeholder="Precio" type="number" required />
        <input name="imageURL" value={form.imageURL} onChange={onChange} placeholder="URL imagen" required />

        <select name="category" value={form.category} onChange={onChange}>
          <option value="figuras">figuras</option>
          <option value="ropa">ropa</option>
          <option value="mangas">mangas</option>
        </select>

        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Descripción"
          required
        />

        <button type="submit">Crear</button>
      </form>

      {msg && <p style={{ marginTop: 10 }}>{msg}</p>}
      {err && <p style={{ marginTop: 10, color: "tomato" }}>{err}</p>}
    </div>
  );
}
