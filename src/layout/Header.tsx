const Header = () => {
  const user = {
    name: "Invitado",    
    role: "Admin"       
  };

  return (
    <header style={{
      background: "#53d5ecff",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2>Sistema de Gestión de Almacén</h2>

      <div>
        <strong>Usuario:</strong> {user.name} <br />
        <strong>Rol:</strong> {user.role}
      </div>
    </header>
  );
};

export default Header;

