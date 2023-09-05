import React, { createContext, useState, useEffect } from 'react';
import { getUsuarios, deleteUsuario, addUsuario } from '../utils/apiUtils.js';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    handlerUsuarios();
  }, []);

  const handlerUsuarios = async () => {
    try {
      const datosUsuarios = await getUsuarios();
      console.log("Datos de usuarios desde el servidor:", datosUsuarios);

      setUsuarios(datosUsuarios);      
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUsuarios = async (id) => {
    try {
      await deleteUsuario(id);
      handlerUsuarios();
    } catch (error) {
      console.log(error); 
    }
  };


  const handlerAddUsuario = async (usuario) => {
    try {
      await addUsuario(usuario);
      handlerUsuarios();
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <MyContext.Provider value={{ usuarios, deleteUsuarios, handlerUsuarios, handlerAddUsuario }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;