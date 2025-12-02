import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './authentication/authprovider';
import ProtectedRoute from './routes/protected_routes';
import Layout from './layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer 
          position="top-right" 
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        
        <Routes>
          {/* Ruta pública */}
          <Route path="/login" element={<Login />} />
          
          {/* Rutas protegidas */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            
            {/* Rutas para ADMINISTRADOR */}
            <Route 
              path="usuarios" 
              element={
                <ProtectedRoute allowedRoles={['ADMINISTRADOR']}>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Módulo de Usuarios</h2>
                    <p className="text-gray-600 mt-2">En desarrollo...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="catalogos" 
              element={
                <ProtectedRoute allowedRoles={['ADMINISTRADOR']}>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Catálogos</h2>
                    <p className="text-gray-600 mt-2">En desarrollo...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="configuracion" 
              element={
                <ProtectedRoute allowedRoles={['ADMINISTRADOR']}>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Configuración</h2>
                    <p className="text-gray-600 mt-2">En desarrollo...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas para ALMACENISTA */}
            <Route 
              path="recibo" 
              element={
                <ProtectedRoute allowedRoles={['ALMACENISTA', 'ADMINISTRADOR']}>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Recibo de Productos</h2>
                    <p className="text-gray-600 mt-2">En desarrollo...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="ubicacion" 
              element={
                <ProtectedRoute allowedRoles={['ALMACENISTA', 'ADMINISTRADOR']}>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Ubicación de Productos</h2>
                    <p className="text-gray-600 mt-2">En desarrollo...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="traspasos" 
              element={
                <ProtectedRoute allowedRoles={['ALMACENISTA', 'ADMINISTRADOR']}>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Traspasos</h2>
                    <p className="text-gray-600 mt-2">En desarrollo...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas para INSPECCIONADOR */}
            <Route 
              path="inspeccion" 
              element={
                <ProtectedRoute allowedRoles={['INSPECCIONADOR', 'ADMINISTRADOR']}>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Inspección de Productos</h2>
                    <p className="text-gray-600 mt-2">En desarrollo...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas para JEFE_CENTRO */}
            <Route 
              path="ordenes" 
              element={
                <ProtectedRoute allowedRoles={['JEFE_CENTRO', 'ADMINISTRADOR']}>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Órdenes de Surtido</h2>
                    <p className="text-gray-600 mt-2">En desarrollo...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="inventario" 
              element={
                <ProtectedRoute allowedRoles={['JEFE_CENTRO', 'ADMINISTRADOR']}>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Inventario Físico</h2>
                    <p className="text-gray-600 mt-2">En desarrollo...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="autorizaciones" 
              element={
                <ProtectedRoute allowedRoles={['JEFE_CENTRO', 'ADMINISTRADOR']}>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Autorizaciones</h2>
                    <p className="text-gray-600 mt-2">En desarrollo...</p>
                  </div>
                </ProtectedRoute>
              } 
            />
            
            {/* Ruta para acceso no autorizado */}
            <Route 
              path="unauthorized" 
              element={
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-red-600">Acceso Denegado</h2>
                  <p className="text-gray-600 mt-2">No tienes permisos para acceder a esta sección</p>
                </div>
              } 
            />
          </Route>
          
          {/* Ruta 404 */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;