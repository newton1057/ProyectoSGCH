 import { pool } from "../Data_BD.js";
import fs from 'fs';
 
export const ObtenerUsuario = async (req, res) => {
    const {Email, Password} = req.body
    console.log(req.body)
    const [result] = await pool.query("SELECT * FROM Usuarios WHERE Email = ? AND Password = ?", 
    [
        Email,
        Password
    ])

    if(result.length == 0){
        return res.status(404).json({message: "Usuario o contraseña incorrecta"});
    }
    res.json(result[0]);
}

export const createUsuario = async (req, res) => {
    const {Nombre, Email, Password, TipoUsuario} = req.body
    console.log(req.body)
    const result = await pool.query("INSERT INTO Usuarios (Nombre, Email, Password, Tipo_Usuario) VALUES (?,?,?,?) ",
    [
        Nombre,
        Email,
        Password,
        TipoUsuario
    ]);
    console.log(result);
    res.send('Creando Usuario');
}

export const ObtenerGrupos = async (req, res) => {
    const {id_usuario} = req.body  
    const [result] = await pool.query("SELECT * FROM grupos_usuarios, grupos, ueas WHERE grupos_usuarios.ID_GRUPO = grupos.ID_GRUPO AND grupos_usuarios.ID_USUARIO=? AND grupos.ID_UEA = ueas.ID_UEA",
    [
        id_usuario
    ]);
    
    console.log(result);
    
    res.json(result);
}
