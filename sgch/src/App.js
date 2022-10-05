import './App.css';
import Login from './Modulos/GestionAcceso/Login';
import Registrar from './Modulos/GestionAcceso/Registrar';
import RestaurarPassword from './Modulos/GestionAcceso/RestaurarPassword';
import MenuAlumno from './Modulos/GestionUsuarios/MenuAlumno';
import Grupo from './Modulos/GestionUsuarios/Componentes/Grupo'; 
import MenuProfesor from './Modulos/GestionUsuarios/MenuProfesor';
function App() {
  return (
    <div className='App'>
      <MenuProfesor/>
      <Grupo/>
    </div>
    
  );
}

export default App;
