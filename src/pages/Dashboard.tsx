import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/authprovider';
import api from '../authentication/authService';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    productos: 0,
    ubicaciones: 0,
    ordenes: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      // Llamar al backend para obtener estadísticas
      const response = await api.get('/dashboard/stats');
      setStats(response.data);
    } catch (error) {
      // Si falla, usar datos de ejemplo
      setStats({
        productos: 1250,
        ubicaciones: 340,
        ordenes: 89,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl text-gray-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Bienvenido, {user?.nombre}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Productos en Almacén</p>
              <p className="text-3xl font-bold text-blue-600">{stats.productos}</p>
            </div>
            <div className="text-4xl">📦</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Ubicaciones Activas</p>
              <p className="text-3xl font-bold text-green-600">{stats.ubicaciones}</p>
            </div>
            <div className="text-4xl">📍</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Órdenes Pendientes</p>
              <p className="text-3xl font-bold text-orange-600">{stats.ordenes}</p>
            </div>
            <div className="text-4xl">📋</div>
          </div>
        </div>
      </div>

      {/* Sección adicional según el rol */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {user?.rol === 'ALMACENISTA' && (
            <>
              <button className="p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                📦 Nuevo Recibo
              </button>
              <button className="p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
                📍 Ubicar Producto
              </button>
            </>
          )}
          {user?.rol === 'JEFE_CENTRO' && (
            <>
              <button className="p-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors">
                📋 Nueva Orden
              </button>
              <button className="p-4 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors">
                📈 Ver Inventario
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;