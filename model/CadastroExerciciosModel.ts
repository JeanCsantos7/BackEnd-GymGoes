
import baseDados from "../database/baseDados"


interface CadastroTypes{
    id: number,
    usuario_id: number,
    nome: string,
    descricao: string,
    grupo_muscular : string,
    imagem_url: string,
    equipamento: string

}

class CadastroExercicios{

    exibirExercicios(musculatura : string)
    {
       const sql = "SELECT * FROM exercicios WHERE grupo_muscular = ?"

       return new Promise((resolve, reject) => {
           
        

       baseDados.query(sql, [musculatura], (error, result) => {

          
          if(error)
          {
            reject(error)
          }

          resolve(result)

       }
    
    
    )
         

       })

    }


    cadastrarExercicios(response : CadastroTypes)
    { 
      const sql = "INSERT INTO exercicios (id,  nome, descricao, grupo_muscular, imagem_url, equipamento) VALUES(?,?,?,?,?,?)"

      return new Promise((resolve, reject) => {
          
        baseDados.query(sql, [response.id, response.nome, response.descricao, response.grupo_muscular, response.imagem_url, response.equipamento], (error, result) => {

            if(error)
            {
                reject(error)
            }

            resolve(result)
        } )
         
      })



    }

}

export default new CadastroExercicios()