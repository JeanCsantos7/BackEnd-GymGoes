
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import baseDados from "../database/baseDados";


dotenv.config()





class LoginModel {

   LoginClientes(email: string, senha: string)
    {
  
        const sql = "SELECT * FROM usuarios WHERE email=?"

        return new Promise((resolve, reject ) => {
 
            baseDados.query(sql, [email], async (error, result: any) => {

                if(error || result.length === 0)
                {

                    return reject(new Error(`Não foi possível concluir seu login, verifique suas credenciais.`))
                   
                }


              

        
                const dadosConsulta = result[0]
                const validacaoSenha = await bcrypt.compare(senha, dadosConsulta.senha)


                if (!validacaoSenha) {
                    reject("Senha incorreta");
                    return;
                }

                const token = jwt.sign(
                    {
                        id: dadosConsulta.id,
                        email: dadosConsulta.email,
                        nome: dadosConsulta.nome
                      
                    },
                    process.env.JWT_SECRET as string, 
                        {expiresIn: "1h"}
                    
                )

                return resolve({token, id: dadosConsulta.id, nome: dadosConsulta.nome})

            
              
            })
          

        })

        

    }

}


export default  new LoginModel()