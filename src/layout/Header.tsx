import { useAuth } from '../authentication/authprovider';

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Header = ({ onToggleSidebar, sidebarOpen }: HeaderProps) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-30 h-16">
      <div className="flex items-center justify-between px-6 py-4 h-full">
        {/* Lado izquierdo - Menú hamburguesa y título */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2 transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {sidebarOpen ? (
                // Icono X para cerrar
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                // Icono hamburguesa para abrir
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
          
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏢</span>
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
              Sistema de Gestión de Almacén
            </h1>
            <h1 className="text-xl font-bold text-gray-800 sm:hidden">
              SGA
            </h1>
          </div>
        </div>

        {/* Lado derecho - Info de usuario y logout */}
        <div className="flex items-center space-x-4">
          {/* Info del usuario */}
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold text-gray-800">
              {user?.nombre}
            </p>
            <p className="text-xs text-gray-500">
              {user?.rol.replace('_', ' ')}
            </p>
          </div>

          {/* Avatar */}
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {user?.nombre.charAt(0).toUpperCase()}
          </div>

          {/* Botón de cerrar sesión */}
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <span className="hidden sm:inline">Cerrar Sesión</span>
            <span className="sm:hidden">Salir</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;