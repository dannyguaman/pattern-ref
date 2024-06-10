
import './App.css';
import AgregarUsuario from './Components/AgregarUsuario';
import DetalleUsuario from './Components/DetalleUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaUsuariosContenedor from './Contenedores/ListaUsuariosContenedor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/usuario/new"} element= {<AgregarUsuario />} />
        <Route path={"/usuario/:id"} element= {<DetalleUsuario />} />
        <Route path={"/"} element= {<ListaUsuariosContenedor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
