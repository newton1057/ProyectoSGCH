import './MenuProfesor.css';
import {useState} from "react";
import Grupo from './Componentes/Grupo';
function MenuProfesor() {
    const [showPassword, setPassword] = useState(false)

  return (
    <div className="MenuAlumno">
        <div className='Menu'>
        <h2 id="NombreUsuario">Eduardo Isaac Davila Bernal</h2>

        <button type="button" class="btn btn-dark" >Crear clase <i class="fa-solid fa-user"></i></button>
        <button type="button" class="btn btn-dark" >Registrarme a clase <i class="fa-solid fa-user"></i></button>
        <button type="button" class="btn btn-dark" >Registrarme a clase <i class="fa-solid fa-user"></i></button>
        </div>

        <div className='Grupos'>
            <Grupo/>
            <Grupo/>
            <Grupo/>
        </div>
    </div>
  );
}

export default MenuProfesor;
