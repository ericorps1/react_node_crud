import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { addUsuario } from '../utils/apiUtils.js'; // Importa getUsuarios para obtener la lista actualizada
import { useNavigate } from 'react-router-dom'; // Utiliza useNavigate en lugar de useHistory
import { MyContext } from '../contexts/context.jsx';

// Función para validar los campos del formulario
const validate = (values) => {
  const errors = {};

  if (!values.nombre) {
    errors.nombre = 'Campo obligatorio'; // Mensaje de error si el nombre está vacío
  }

  if (!values.teléfono) {
    errors.teléfono = 'Campo obligatorio'; // Mensaje de error si el teléfono está vacío
  } else if (!/^\d{10}$/i.test(values.teléfono)) {
    errors.teléfono = 'El teléfono debe tener 10 dígitos'; // Mensaje de error si el teléfono no tiene 10 dígitos
  }

  return errors;
};

const AgregarUsuario = () => {
  const navigate = useNavigate();
  const { handlerAddUsuario } = useContext(MyContext);

  return (
    <div>
      <h1>Formulario</h1>

      <hr />

      <br />
      <Formik
        initialValues={{ nombre: '', teléfono: '' }}
        validate={validate}
        onSubmit={async (values, { resetForm }) => {
          try {
            // Agregar el usuario
            await handlerAddUsuario(values);

            // Reiniciar el formulario
            resetForm();

            // Después de agregar el usuario y obtener la lista actualizada, navega al listado de usuarios
            navigate('/usuarios');

            console.log('Valores enviados:', values);
          } catch (error) {
            console.error('Error al agregar usuario:', error);
          }
        }}
      >
        <Form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <Field type="text" id="nombre" name="nombre" />
            <ErrorMessage name="nombre" component="div" className="error" />
          </div>

          <br />
          <div>
            <label htmlFor="teléfono">Teléfono:</label>
            <Field type="text" id="teléfono" name="teléfono" />
            <ErrorMessage name="teléfono" component="div" className="error" />
          </div>
          <br />
          <button type="submit">Enviar</button>
        </Form>
      </Formik>
      <br />
      <a href="/usuarios">Volver al listado de usuarios</a>
    </div>
  );
};

export default AgregarUsuario;