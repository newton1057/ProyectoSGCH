import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Modulos/GestionAcceso/Login';
import Registrar from './Modulos/GestionAcceso/Registrar';
import RestaurarPassword from './Modulos/GestionAcceso/RestaurarPassword';
import MenuAlumno from './Modulos/GestionUsuarios/MenuAlumno';
import Grupo from './Modulos/GestionUsuarios/Componentes/Grupo'; 
import MenuProfesor from './Modulos/GestionUsuarios/MenuProfesor';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/index' element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path='/Registrar' element={<Registrar/>}/>
        </Routes>
        <Routes>
          <Route path='/RestaurarPassword' element={<RestaurarPassword/>}/>
        </Routes>

        <Routes>
          <Route path='/MenuAlumno' element={<MenuAlumno/>}/>
        </Routes>
        <Routes>
          <Route path='/MenuProfesor' element={<MenuProfesor/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
