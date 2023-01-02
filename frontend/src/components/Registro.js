import React, { useState } from "react";
import axios from 'axios';

const Registro = () => {
  const initV = {
    nombre: "",
    apellido: "",
    edad: 18,
    dni: 0,
    telefono: 0,
    correo: "",
  };

  const [usuario, setUsuario] = useState(initV);

  const capturarDatos = (e)=>{
    const {name, value} = e.target
    setUsuario({...usuario, [name]: value})
  }

  const guardarDatos = async(e)=>{
    e.preventDefault()
    // console.log(usuario)

    // logica para la peticion POST en el backend

    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      dni: usuario.dni,
      telefono: usuario.telefono,
      correo: usuario.correo,
    }

    await axios.post('http://localhost:4000/api/usuarios', newUser);

    // reseteando al valor inicial el formulario
    setUsuario({...initV})
  }


  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarDatos}>
          <h2 className="text-center">Crear Usuario</h2>
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
          <input className="btn btn-primary form-control" type="submit" value="Registrar"/>
        </form>
      </div>
    </div>
  );
};

export default Registro;
