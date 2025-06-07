import baseDados from "../database/baseDados"






class CheckIN
{
  
  exibirCheckIn(nome: string)
  {
   const sql = "SELECT * FROM controlecheckin WHERE nome=?"
   
   return new Promise((resolve, reject) => {
    
    baseDados.query(sql, [nome], (error, result) => {
    
      if(error)
      {
      reject(error)
      }

      resolve(result)

    })

   })

  }
  
  
  buscarPorID(id: number)
  {
    const sql = "SELECT * FROM controlecheckin WHERE id =? "

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

  atualizarFrequencia(id: number){
  
    const sql = "UPDATE controlecheckin SET frequencia= frequencia + 1 WHERE id=? "

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

  inserirPrimeiroRegistro(id: number, nome: string)
  { 

    const sql = `INSERT INTO controlecheckin (id, nome, frequencia) VALUES (?,?,1)`

    return new Promise((resolve, reject) => {
      
      baseDados.query(sql, [id, nome], (error, result) => {
       
        if(error)
        {
          reject(error)
        }

        resolve(result)

      })

    })
  }
}


export default new CheckIN()