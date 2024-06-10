import React from "react";
import { Link } from "react-router-dom";

const ListaUsuariosVista = ({ listaUsuarios, borrarUsuario, navegarHaciaCreacionUsuario }) => (
  <div>
    <ul className="App">
      {listaUsuarios.map((usuario, idx) => (
        <li key={idx}>
          <Link to={"/usuario/" + usuario.id}>{usuario.nombre}</Link>{" "}
          <button onClick={() => borrarUsuario(usuario.id)}>Borrar</button>
        </li>
      ))}
    </ul>
    <button onClick={navegarHaciaCreacionUsuario}>Nuevo</button>
  </div>
);

export default ListaUsuariosVista;