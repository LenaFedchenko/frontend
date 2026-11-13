import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import Header from './components/Header.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { baseApi } from './api/baseApi.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register.tsx'
import Login from './components/Login.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={baseApi}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  </StrictMode>,
)
