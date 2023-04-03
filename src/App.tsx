import React from 'react';
import './App.css';
import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ApplicationsDashboard from './modules/applications-board/applicationsBoard';
import ErrorPage from './components/error/errorPage';

function App() {

  const routes: RouteObject[] = [
    { path: "/", element: <Navigate to="app" /> },
    {
      path: "app",
      element: <ApplicationsDashboard /> ,
      children: []
    },
    { path: "*", element: <ErrorPage /> }
  ];

  const router = createBrowserRouter(routes);
  
  return (
    <div className="app">
      <header className="app-header"> Applications </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
