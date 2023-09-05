import React, { useContext } from 'react';
import { MyContext } from '../contexts/context.jsx';
import { Link } from 'react-router-dom'; // Importa Link para crear enlaces

import './TablaUsuarios.css';

const TablaUsuarios = () => {
  const { usuarios, deleteUsuarios } = useContext(MyContext);

  return (
    <div>
      <h1>Listado de usuarios</h1>

      <hr />
      <Link to="/usuarios/add">Agregar Usuario</Link> {/* Enlace para agregar usuario */}
      {usuarios.length === 0 ? (
        <p>No hay registros :/</p>
      ) : (
        <table className="table-usuarios">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              {/* Otros encabezados según los campos de tus usuarios */}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                {/* Renderizar otros campos del usuario aquí */}
                <td>
                  <button onClick={() => deleteUsuarios(usuario.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TablaUsuarios;