import api from '../api/api.js';

export const getUsuarios = async () => {
  try { 
    const { data } = await api.get('/usuarios');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const deleteUsuario = async (id) => {
  try {
    // Aquí, asumo que el id debe ser parte de la URL
    const { data } = await api.delete(`/usuarios/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;  // Propagar el error para manejarlo en niveles superiores si es necesario
  }
}

export const addUsuario = async (usuario) => {
  try {
    const { nombre, teléfono } = usuario; // Extraer el nombre y el teléfono del objeto usuario
    const response = await api.post('/usuarios', { nombre, teléfono }); // Enviar la solicitud POST al servidor
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
