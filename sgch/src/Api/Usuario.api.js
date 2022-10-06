import axios from 'axios';

export const CrearUsuario = async(Usuario) => 
    await axios.post('http://localhost:4001/CrearUsuario', Usuario);
//export const getProductosRequest = async () => 
  //  await axios.get('http://192.168.1.97:3001/Productos')


export const getUsuario = async(Usuario) => 
    await axios.post('http://localhost:4001/ObtenerUsuario', Usuario);

export const getGrupos = async (Usuario) => 
    await axios.post('http://localhost:4001/ObtenerGrupos', Usuario);

export const getGruposDisponibles = async() =>
    await axios.get('http://localhost:4001/Grupos');
//export const getOfertasRequest = async() => 
  //  await axios.get('http://192.168.1.97:3001/Ofertas');

