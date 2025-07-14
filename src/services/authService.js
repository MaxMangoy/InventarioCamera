// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000';
const ENDPOINTS = {
  afiliado: '/afiliados/login',
  proveedor: '/proveedores/login',
};

export const login = async (role, email, password) => {
  if (!ENDPOINTS[role]) throw new Error('Rol de usuario no válido.');

  try {
    const response = await axios.post(`${API_URL}${ENDPOINTS[role]}`, { email, password });
    const { token, user_name } = response.data;

    localStorage.setItem('authToken', token);
    localStorage.setItem('userName', user_name);
    localStorage.setItem('userRole', role);

    return { token, userName: user_name, role };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Error de conexión. Inténtalo de nuevo.';
    throw new Error(errorMessage);
  }
};