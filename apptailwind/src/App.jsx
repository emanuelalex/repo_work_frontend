import { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name.trim() || !user.email.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    setError("");
    // Guardar en sessionStorage
    sessionStorage.setItem("user", JSON.stringify(user));
    alert("Usuario guardado correctamente en sessionStorage.");
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Guardar Usuario
        </button>
      </form>
    </div>
  );
}

export default App;
