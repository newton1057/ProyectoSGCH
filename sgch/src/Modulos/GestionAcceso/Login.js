import './Login.css';
import {useState} from "react";
import {Link, withRouter , Navigate, useNavigate    } from 'react-router-dom';
import {Form, Formik } from 'formik';
import {getUsuario} from '../../Api/Usuario.api'


function Login() {
  const navigate = useNavigate();
  const [showPassword, setPassword] = useState(false)

  return (
    <div className="Login">
        <h1>Login</h1>
        <br></br>

        <Formik
          initialValues={{ 
            Email: "",
            Password: "",
        }}
        onSubmit={async(values, actions)=>{
            
            console.log(values);
            try {
                const response = await getUsuario(values)
                console.log(response);
                alert("Acceso correcto");
                actions.resetForm();
                localStorage.setItem('Usuario', JSON.stringify(response.data));
                if(response.data.tipo_usuario == "Alumno"){
                  navigate('/MenuAlumno');
                }else{
                  if(response.data.tipo_usuario == "Profesor"){
                    navigate('/MenuProfesor');
                  }else{
                    navigate('/MenuProfesor');
                  }
                }
                
                
            } catch (error) {
              alert("Usuario o contraseña incorrecta");
                console.error(error);
            }        
        }}
        >

          {({handleChange, handleSubmit, values }) => (
            <Form  id="Login" onSubmit={handleSubmit}>
              <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email: </label>
                  <input type="email" name="Email" class="form-control" id="Usuario" placeholder="correo@example.com" onChange={handleChange} value={values.Email} ></input>
              </div>
              <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Password: </label>
                  <div id="X">
                    <input type={showPassword ? "text" : "password"} name="Password" class="form-control" id="Password" placeholder="Password" onChange={handleChange} value={values.Password}></input> 
                    <button type="button" onClick={()=> setPassword(!showPassword)}> {showPassword ? <i class="fa-solid fa-eye" id="eye"></i> : <i class="fa-solid fa-eye-slash"></i>}</button>
                    
                  </div>
                  
              </div>  
              <p><Link to="/RestaurarPassword">¿Olvidaste tu contraseña?</Link > </p>
        
              <p><Link to="/Registrar">Registrarme</Link> </p>
              <br></br>
              <button type="submit" class="btn btn-dark" >Iniciar sesión <i class="fa-solid fa-user"></i></button>
            </Form>
          )}  
        </Formik>
    </div>
  );
}

export default Login;