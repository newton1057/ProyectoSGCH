import './MenuAlumno.css';
import {useState, useEffect} from "react";
import Grupo from './Componentes/Grupo';
import {getGrupos} from '../../Api/Usuario.api'

function MenuAlumno() {
    const [showPassword, setPassword] = useState(false)
    const [usuario, setUsuario] = useState([]);
    const [Grupos, setGrupos] = useState([]);

    useEffect(() => {
      const usuario = JSON.parse(localStorage.getItem('Usuario'));
      if (usuario) {
        setUsuario(usuario);
      }

      async function loadGrupos(){
        console.log(usuario.id_usuario)
        const response = await getGrupos(usuario);
  
        setGrupos(response.data);
      }
  
      loadGrupos()

    }, []);

    

  return (
    <div className="MenuAlumno">
        <div className='Menu'>
        <h2 id="NombreUsuario">{usuario.nombre}</h2>
        <h5 id="NombreUsuario">{usuario.email}</h5>

        <button type="button" class="btn btn-dark" >Registrarme a clase <i class="fa-solid fa-user"></i></button>
        </div>

        <div className='Grupos'>
          {
            Grupos.map( Grupos => (
            <Grupo Nombre_UEA={Grupos.Nombre_UEA} Horario={Grupos.HORARIO} Profesor={Grupos.Profesor}/>
            ))
          
          } 
            
        </div>
    </div>
  );
}

export default MenuAlumno;
