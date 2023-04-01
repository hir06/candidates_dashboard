import React from 'react';
import './App.css';
import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './modules/dashboard/dashboard';
import ErrorPage from './modules/error/errorPage';

function App() {

  const routes: RouteObject[] = [
    { path: "/", element: <Navigate to="app" /> },
    {
      path: "app",
      element: <Dashboard /> ,
      children: []
    },
    { path: "*", element: <ErrorPage /> }
  ];

  const router = createBrowserRouter(routes);
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
