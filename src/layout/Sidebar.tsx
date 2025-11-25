const Sidebar = () => {
  const user = {
    name: "Invitado",
    role: "Admin" 
  };

  const menus = {
    "Admin": ["Usuarios", "Reportes", "Configuración"],
    "Almacenista": ["Recibo", "Ubicación", "Inventario"],
    "Inspector": ["Inspección de Producto"],
    "Jefe de centro": ["Autorizaciones", "Entradas por compras"]
  };

  const menuActual = menus[user.role] || [];

  return (
    <aside
      style={{
        width: "200px",
        background: "#ff0000ff",
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
