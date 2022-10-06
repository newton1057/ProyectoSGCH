import React, { useMemo, useState } from "react";
import './Registrar.css';
import {Form, Formik, useFormik } from 'formik';
import {Link, withRouter , Navigate, useNavigate    } from 'react-router-dom';
import Select from 'react-select'
import {getGruposDisponibles} from '../../Api/Usuario.api';

//Tipos de usuarios
const TiposUsuarios = [
    { value: 'alumno', label: 'Alumno' },
    { value: 'profesor', label: 'Profesor' },
    { value: 'coordinador', label: 'Coordinador' }
]

function RegistrarClase() {
    const navigate = useNavigate();
    const [Grupos,setGrupos] = useState([]);
    
    useEffect(() => {
        async function loadGrupos(){
          const response = await getGruposDisponibles();
          setGrupos(response.data);
        }
    
        loadGrupos()
      }, [])

    function changeHandler(e) {
        setTipoUser(e);
    };

    return (
    
    <div className="Registrar">
        <h1>Registrar</h1>
        <br></br>
        <Formik
            initialValues={{
                ID_Usuario
            }}
            onSubmit={async(values, actions)=>{
                values.TipoUsuario=TipoUser.label;
                console.log(values);
                try {
                    const response = await CrearUsuario(values)
                    console.log(response);
                    actions.resetForm();
                    alert("Usuario Creador")
                    navigate('/index');
                } catch (error) {
                    console.error(error);
                }        
            }}
        >
        {({handleChange, handleSubmit, values }) => (
            <Form id="Registrar" onSubmit={handleSubmit}>
                <div id="Campos">
                    <div id="Campos1">
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" class="form-label">Nombre(s): </label>
                        <input type="text" name ="Nombre" class="form-control" id="exampleFormControlInput1" placeholder="Nombre(s)" onChange={handleChange} value={values.Nombre}></input>
                    </div> 
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" class="form-label">Email: </label>
                        <input type="email" name ="Email" class="form-control" id="exampleFormControlInput1" placeholder="Email" onChange={handleChange} value={values.Email}></input>                  
                    </div>
                    </div>
                    <div id="Campos1">
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" class="form-label">Password: </label>
                        <input type="text" name ="Password" class="form-control" id="exampleFormControlInput1" placeholder="Password" onChange={handleChange} value={values.Password}></input>
                    </div>  
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" class="form-label">Tipo de Usuario: </label>
                        <Select name ="Tipo_User" options={TiposUsuarios} onChange={changeHandler} ></Select>
                    </div>
                    </div>
                    </div>   
                    <br></br>
                    <button type="submit" class="btn btn-dark">Registrar  <i class="fa-solid fa-user"></i></button>
                </Form>
            )}        
        </Formik>
    </div>
  );
}
 
export default RegistrarClase;