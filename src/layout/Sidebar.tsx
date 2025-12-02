import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../authentication/authprovider';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const { user } = useAuth();
  const location = useLocation();

  // Menús según el rol del usuario
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

  // Obtener menú del usuario actual
  const userMenu = user ? menuItems[user.rol] || [] : [];

  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 bg-gray-800 text-white transition-all duration-300 ease-in-out z-20 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <nav className="mt-6 overflow-y-auto h-full pb-6">
        {userMenu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-4 transition-all duration-200 ${
                isActive 
                  ? 'bg-blue-600 border-l-4 border-blue-400' 
                  : 'hover:bg-gray-700 border-l-4 border-transparent'
              }`}
              title={!isOpen ? item.label : ''}
            >
              <span className="text-2xl">{item.icon}</span>
              {isOpen && (
                <span className="ml-4 font-medium text-sm">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Indicador de estado del sidebar */}
      <div className={`absolute bottom-4 left-0 right-0 text-center text-xs text-gray-400 ${
        !isOpen && 'hidden'
      }`}>
        <p>v1.0.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;