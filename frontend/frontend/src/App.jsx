import { useState } from 'react'
import './App.css'
import { MyContextProvider } from './contexts/context.jsx';
import { Route, Routes } from 'react-router-dom';

import UsuariosList from './components/UsuariosList.jsx';
// import UsuarioEdit from './components/UsuarioEdit';
// import UsuarioView from './components/UsuarioView';
import NotFound from './components/NotFound';
import AgregarUsuario from './components/AgregarUsuario.jsx';

function App() {
  return (
    <MyContextProvider>
        <Routes>
          <Route path="/usuarios" element={<UsuariosList/>} />
          <Route path="/usuarios/add" element={<AgregarUsuario/>} />
          {/*<Route path="/usuarios/edit/:id" component={UsuarioEdit} />
          <Route path="/usuarios/view/:id" component={UsuarioView} /> */}
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      
    </MyContextProvider>
      
  )
}

export default App
