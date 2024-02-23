import React from 'react'
import AppRoutes from './components/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

export const API_URL = "https://65d6e9a627d9a3bc1d799da7.mockapi.io/api/v1/user-details";

function App() {

  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router}/>
  </>
}

export default App