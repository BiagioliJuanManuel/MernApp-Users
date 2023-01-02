import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ListaUsrs = () => {
  
  const [lista, setLista] = useState([])

  useEffect(()=>{
    const getUsrs = async()=>{
        const res = await axios.get('http://localhost:4000/api/usuarios/')
        setLista(res.data)
    }
    getUsrs();
  },[lista])

  const delUsr = async(id)=>{
    await axios.delete('http://localhost:4000/api/usuarios/' + id)
  }
  
  return (
    <div className='row'>{
      lista.map(listMap => (
        <div className='col-md-4 p-2' key={listMap._id}>
          <div className='card'>
            <div className='card-header'>
              <h5>Nombre: {listMap.nombre}</h5>

            </div>
            <div className='card-body'>
              <p>Apellido: {listMap.apellido}</p>
              <p>Edad: {listMap.edad}</p>
              <p>DNI: {listMap.dni}</p>
              <p>Telefono: {listMap.telefono}</p>
              <p>Correo: {listMap.correo}</p>
            </div>
            <div className='card-footer'>
              <button className='btn btn-danger' onClick={()=>delUsr(listMap._id)}>Eliminar</button>

              <Link className='btn btn-secondary m-1' to={'/edit/' + listMap._id}>Editar</Link>
            </div>
          </div>
        </div>
      ))
    }</div>
  )
}

export default ListaUsrs