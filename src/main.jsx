import React from 'react';
import ReactDOM from 'react-dom/client';

import { Login, Register, Dashboard } from './pages';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { StoreProvider } from './contexts/StoreContext';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StoreProvider>
);
