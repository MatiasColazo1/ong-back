require('dotenv').config();
const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
});

conexion.connect((err)=>{
    if(err){
        console.log('ocurrio un error: '+ err)
    } else{
        console.log('la base de datos se conecto!')
    }
});

module.exports = conexion