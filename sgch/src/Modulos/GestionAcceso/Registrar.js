import React, { useMemo, useState } from "react";

import './Registrar.css';
import {Form, Formik, useFormik } from 'formik';
//import {CrearUsuario} from '../Api/Usuario.api';

function Registrar() {
    const [value,setValue] = useState("");
     

  return (
    
    <div className="Registrar">
        <h1>Registrar</h1>
        <br></br>

        <Formik
            initialValues={{
                Nombre: "",
                ApellidoPaterno: "",
                ApellidoMaterno: "",
                Telefono: "",
                Pais: "",
                Email: "",
                Password: "",
                RPassword: ""
            }}
            onSubmit={async(values, actions)=>{
                if(values.Password == values.RPassword){
                    values.Pais=value.label;
                    console.log(values);
                    try {
                        //const response = await CrearUsuario(values)
                        //console.log(response);
                        actions.resetForm();
                    } catch (error) {
                        console.error(error);
                    }
                    
                }else{
                    alert("Contraseña no coincide");
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
                        <label htmlFor="exampleFormControlInput1" class="form-label">Repetir Password: </label>
                        <input type="text" name ="RPassword" class="form-control" id="exampleFormControlInput1" placeholder="Repetir Password" onChange={handleChange} value={values.RPassword}></input>
                        
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

export default Registrar;
