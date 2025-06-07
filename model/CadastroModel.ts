// models/CadastroModel.ts
import baseDados from "../database/baseDados"
import bcrypt from "bcrypt"

export interface CadastroTypes {
  id: number
  email: string
  nome: string,
  cpf: string,
  senha: string,
  genero: string,
  peso: number,
  altura: number
}

class CadastroModel {
  
  async criarConta(usuarios: CadastroTypes)
  {
    const sql = "INSERT INTO usuarios (id,  nome, cpf, email, senha, genero, peso, altura) VALUES(?,?,?,?,?,?,?,?)"
    const salts = 10
    const senhaCriptografada = await bcrypt.hash(usuarios.senha, salts)

     return new Promise((resolve, reject) => {
        
       baseDados.query(sql, [usuarios.id, usuarios.nome, usuarios.cpf, usuarios.email,   senhaCriptografada, usuarios.genero, usuarios.peso, usuarios.altura], (error, result) => {
          
           if(error)
           {
            reject(error)

           }

           resolve(result)
         
       })

     })

  }
   buscarIMC(id: number)
  {
  
   const sql = "SELECT  *, ROUND(peso/(altura*altura), 2) as imc FROM usuarios WHERE id=?"

   return new Promise((resolve, reject) => {
     
    baseDados.query(sql, [id], (error, result) => {
      
      if(error)
      {
        reject(error)
      }

      resolve(result)

    })
     
   })
    
  
  }



    
}

export default new CadastroModel
