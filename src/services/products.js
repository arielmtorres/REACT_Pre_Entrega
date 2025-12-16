const BASE_URL = "https://694052aa993d68afba6bbbaf.mockapi.io";

export async function getProducts(category) {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Error cargando productos");
  const data = await res.json();

  const list = Array.isArray(data) ? data : [];
  if (!category) return list;

  return list.filter(
    (p) => String(p.category || "").toLowerCase() === String(category).toLowerCase()
  );
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Error cargando producto");
  const data = await res.json();

  const list = Array.isArray(data) ? data : [];
  const prod = list.find((p) => String(p.id) === String(id));

  if (!prod) throw new Error("Producto no encontrado");
  return prod;
}

export async function createProduct(product) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) throw new Error("No se pudo crear el producto");
  return await res.json();
}
