import './Grupo.css';
import {useState} from "react";

function Grupo() {
    const [showPassword, setPassword] = useState(false)

  return (
    <div className="Grupo">
        <h2>Nombre del grupo</h2>
        <h2>UEA</h2>
        <h3>Profesor</h3>
        <h3>Horario</h3>
        <p>Link</p>
        <div id="Boton">
          <button type="button" class="btn btn-dark" >Eliminar clase <i class="fa-solid fa-user"></i></button>
        </div>
        
    </div>
    
  );
}

export default Grupo;
