const Sidebar = () => {
  // Definimos los roles válidos
  type Role = "Admin" | "Almacenista" | "Inspector" | "Jefe de centro";

  // Usuario con rol tipado
  const user: { name: string; role: Role } = {
    name: "Invitado",
    role: "Admin"
  };

  // Menús tipados correctamente
  const menus: Record<Role, string[]> = {
    Admin: ["Usuarios", "Reportes", "Configuración"],
    Almacenista: ["Recibo", "Ubicación", "Inventario"],
    Inspector: ["Inspección de Producto"],
    "Jefe de centro": ["Autorizaciones", "Entradas por compras"]
  };

  // Ya no da error porque menus está tipado
  const menuActual = menus[user.role];

  return (
    <aside
      style={{
        width: "200px",
        background: "#ff0000",   // Color corregido
        padding: "20px",
        minHeight: "100vh"
      }}
    >
      <h3>Menú</h3>

      <ul>
        {menuActual.map((op, index) => (
          <li key={index}>{op}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;