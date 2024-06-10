import React, { useEffect, useState } from "react";
import axios from "axios";
import ListaUsuariosVista from "../Vistas/ListaUsuariosVista";
import { useNavigate } from "react-router-dom";

const PETICION_GET_USUARIOS = "http://localhost:5000/usuarios/";

const ListaUsuariosContenedor = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(PETICION_GET_USUARIOS)
      .then(response => {
        console.log(response.data);
        setListaUsuarios(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const borrarUsuario = async (id) => {
    try {
      await axios.delete(PETICION_GET_USUARIOS + id);
      const listaActualizada = listaUsuarios.filter(usuario => usuario.id !== id);
      setListaUsuarios(listaActualizada);
    } catch (error) {
      console.log(error);
    }
  };

  const navegarHaciaCreacionUsuario = () => {
    navigate('/usuario/new');
  };

  return <ListaUsuariosVista listaUsuarios={listaUsuarios} borrarUsuario={borrarUsuario} navegarHaciaCreacionUsuario={navegarHaciaCreacionUsuario} />;
};

export default ListaUsuariosContenedor;