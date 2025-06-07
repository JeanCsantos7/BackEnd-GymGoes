import baseDados from "../database/baseDados"

interface updateDados{
    id: number,
    nome: string,
    cpf: string,
    email: string,
    genero: string,
    peso: number,
    altura: number


}

class PerfilModel{
  
    editarPerfil(response: updateDados, id: number)
    {
      const sql = "UPDATE usuarios SET nome=?, cpf=?, email=?, genero=?, peso=?, altura=? WHERE id=? "

      return new Promise((resolve, reject) => {
        
        baseDados.query(sql, [response.nome, response.cpf, response.email, response.genero, response.peso, response.altura, id], (error, result) => {
            if(error)
            {
                reject(error)
            }

            resolve(result)
        })

      })

    }

}

export default new PerfilModel()