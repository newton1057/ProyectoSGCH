import './Grupo.css';
import {useState} from "react";

function Grupo(props) {
    const [showPassword, setPassword] = useState(false)

  return (
    <div className="Grupo">
        
        <h2>{props.Nombre_UEA}</h2>
        <h3>Profesor: {props.Profesor}</h3>
        <h3>Horario</h3>
        <h5>{props.Horario}</h5>
        <p>Link: {props.Link}</p>
        <div id="Boton">
          <button type="button" class="btn btn-dark" >Eliminar clase <i class="fa-solid fa-user"></i></button>
        </div>
        
    </div>
    
  );
}

export default Grupo;
