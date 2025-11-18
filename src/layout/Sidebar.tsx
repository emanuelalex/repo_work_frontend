import { Link } from "react-router-dom";
import "./layout.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">SGA</h2>

      <nav className="sidebar-nav">
        <Link to="/dashboard">Dashboard</Link>

        {/* Módulos según ERS y Casos de Uso */}
        <h4 className="section-title">Recibo</h4>
        <Link to="/importar-packing">Importar Packing List (CU-03)</Link>
        <Link to="/recibo">Recibo sin Inspección (CU-04)</Link>

        <h4 className="section-title">Almacén</h4>
        <Link to="/ubicacion">Ubicación de Productos (CU-05)</Link>
        <Link to="/traspasos">Movimientos / Traspasos</Link>

        <h4 className="section-title">Inspección</h4>
        <Link to="/inspeccion">Inspección de Producto (CU-06)</Link>

        <h4 className="section-title">Jefe de Centro</h4>
        <Link to="/entradas-compras">Entradas por Compras (CU-07)</Link>
        <Link to="/autorizaciones">Autorizaciones</Link>

        <h4 className="section-title">Surtido</h4>
        <Link to="/orden-surtido">Orden de Surtido (CU-10)</Link>

        <h4 className="section-title">Administrador</h4>
        <Link to="/catalogos">Catálogos</Link>
        <Link to="/usuarios">Usuarios / Perfiles</Link>
        <Link to="/parametros">Configuración</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
//YADIRA