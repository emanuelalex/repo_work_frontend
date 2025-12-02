import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../authentication/authprovider';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const { user } = useAuth();
  const location = useLocation();

  const menuItems = {
    ADMINISTRADOR: [
      { path: '/dashboard', label: 'Dashboard', icon: '📊' },
      { path: '/usuarios', label: 'Usuarios', icon: '👥' },
      { path: '/catalogos', label: 'Catálogos', icon: '📚' },
      { path: '/configuracion', label: 'Configuración', icon: '⚙️' },
    ],
    ALMACENISTA: [
      { path: '/dashboard', label: 'Dashboard', icon: '📊' },
      { path: '/recibo', label: 'Recibo', icon: '📦' },
      { path: '/ubicacion', label: 'Ubicación', icon: '📍' },
      { path: '/traspasos', label: 'Traspasos', icon: '🔄' },
    ],
    INSPECCIONADOR: [
      { path: '/dashboard', label: 'Dashboard', icon: '📊' },
      { path: '/inspeccion', label: 'Inspección', icon: '🔍' },
    ],
    JEFE_CENTRO: [
      { path: '/dashboard', label: 'Dashboard', icon: '📊' },
      { path: '/ordenes', label: 'Órdenes de Surtido', icon: '📋' },
      { path: '/inventario', label: 'Inventario', icon: '📈' },
      { path: '/autorizaciones', label: 'Autorizaciones', icon: '✅' },
    ],
  };

  const userMenu = user ? menuItems[user.rol] || [] : [];

  return (
    <aside
      className={`fixed left-0 top-16 h-full bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <nav className="mt-6">
        {userMenu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 transition-colors ${
                isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              {isOpen && <span className="ml-4 font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;