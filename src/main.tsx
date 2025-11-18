import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import SignUp from "./routes/signup.tsx";
import Login from './routes/login.tsx'; 
import Dashboard from "./routes/dashboard.tsx";
import ProtectedRoute from './routes/protected_routes.tsx';
import { Authprovider } from './authentication/authprovider.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children : [
      {
        path: "/dashboard",
        element: <Dashboard/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />  
    </Authprovider>
  </StrictMode>,
)
