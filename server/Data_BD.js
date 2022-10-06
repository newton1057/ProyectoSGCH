import {createPool} from 'mysql2/promise';

//Patron Singleton ya que solo se realiza una instancia
export const pool = createPool({
    host:'localhost',
    port:4308,
    user:'root',
    password:'',
    database:'sgch'
});