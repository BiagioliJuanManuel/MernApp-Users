import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Registro from './components/Registro';
import ListaUsrs from './components/ListaUsrs';
import EditUsr from './components/EditUsr';

function App() {
  return (
    <div className=''>
      <Navbar/>
      <div className='container p-4'>
        <Routes>
          <Route path='/' element={<ListaUsrs />}/>
          <Route path='/registro' element={<Registro />}/>
          <Route path='/edit/:id' element={<EditUsr />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
