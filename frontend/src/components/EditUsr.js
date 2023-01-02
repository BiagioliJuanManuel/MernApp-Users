import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const EditUsr = () => {
  const initV = {
    nombre: "",
    apellido: "",
    edad: 18,
    dni: 0,
    telefono: 0,
    correo: "",
  };

  let {id} = useParams(); //recuperando los datos de usuario por id para editarlos

  const [usuario, setUsuario] = useState(initV);
  const [subId, setSubId] = useState(id); //datos del usuario a editar

  const capturarDatos = (e)=>{
    const {name, value} = e.target
    setUsuario({...usuario, [name]: value})
  }

  // funcion para actualizar usuario 

  const actualizarUsr = async(e)=>{
    e.preventDefault();
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      dni: usuario.dni,
      telefono: usuario.telefono,
      correo: usuario.correo,
    }
    await axios.put('http://localhost:4000/api/usuarios/' + subId, newUser)
    setUsuario({...initV})
    setSubId('')
  }

  // logica peticion put (edicion de usuario)

  const obtenerUno = async(valorId)=>{
    const res = await axios.get('http://localhost:4000/api/usuarios/' + valorId)
    setUsuario({
      nombre: res.data.nombre,
      apellido: res.data.apellido,
      edad: res.data.edad,
      dni: res.data.dni,
      telefono: res.data.telefono,
      correo: res.data.correo,
    })
  }

  useEffect(()=>{
    if(subId !== ''){
      obtenerUno(subId)
    }
  },[subId]);


  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={actualizarUsr}>
          <h2 className="text-center">Editar Usuario</h2>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Ingresa tu nombre"
              required
              name="nombre"
              value={usuario.nombre}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Apellido:
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Ingresa tu apellido"
              required
              name="apellido"
              value={usuario.apellido}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              DNI:
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Ingresa tu DNI"
              required
              name="dni"
              value={usuario.dni}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Edad:
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Ingresa tu edad"
              required
              name="edad"
              value={usuario.edad}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Telefono:
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Ingresa tu telefono"
              required
              name="telefono"
              value={usuario.telefono}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Ingresa tu email"
              required
              name="correo"
              value={usuario.correo}
              onChange={capturarDatos}
            />
          </div>
          <button className="btn btn-danger form-control mt-2">Actualizar Usuario</button>
        </form>


      </div>
    </div>
  );
};

export default EditUsr;
