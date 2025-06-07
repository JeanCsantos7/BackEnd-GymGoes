import mysql from "mysql2"
import dotenv from 'dotenv'


dotenv.config()

const baseDados = mysql.createPool({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sccp1910",
    database: "bd_gymgoes",
  
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



