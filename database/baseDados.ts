import mysql from "mysql2"
import dotenv from 'dotenv'


dotenv.config()

const baseDados = mysql.createPool({

    host: process.env.MYSQLHOST,
    port: parseInt(process.env.MYSQLPORT || "5000"),
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    connectTimeout: 50000,
 waitForConnections: true,
 connectionLimit: 20,
 queueLimit: 0,
  
}


)

baseDados.getConnection((error, connection) => {

    if(error)
    {
        console.error(`Não foi Possível se conectar ao banco de dados : ${error} `)
        return;
        
    }


    console.log("Conexão realizada com sucesso!!")
    connection.release()


})


export default baseDados



