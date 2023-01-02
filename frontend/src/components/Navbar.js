import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid mx-4'>
                <Link className='navbar-brand' to='/'>Mern App</Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
                </button>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>Home</Link>
                            </li>
                        </ul>    
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ms-auto'>
                            
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>Lista Usuarios</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/registro'>Crear Usuario</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar