import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

//importando dependências

import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

//importando paginas

import Home from "./routes/Home.jsx";
import Diario from './routes/Diario.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Admin from './routes/Admin.jsx';
import Cadastro from './routes/Cadastro.jsx'
import Relatorios from './routes/Relatorios.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "registrar_relatorio",
        element: <Diario />,
      },
      {
        path: "administrativo",
        element: <Admin />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "relatorios",
        element: <Relatorios />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
