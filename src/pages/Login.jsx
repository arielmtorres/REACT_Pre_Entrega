import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";


export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  if (user) {
    navigate("/admin/alta-productos", { replace: true });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setErr("");

    const ok = login(username.trim(), password.trim());
    if (!ok) return setErr("Credenciales inválidas (admin / 1234)");

    navigate("/admin/alta-productos", { replace: true });
  };

  return (
    <div style={{ padding: "1rem", maxWidth: 360 }}>
      <h2>Login Admin</h2>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: "0.5rem" }}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          type="password"
          required
        />
        <button type="submit">Ingresar</button>
      </form>

      {err && <p style={{ color: "tomato", marginTop: 10 }}>{err}</p>}
    </div>
  );
}
