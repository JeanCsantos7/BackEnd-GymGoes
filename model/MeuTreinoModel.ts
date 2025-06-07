
import baseDados from "../database/baseDados"


interface TreinoTypes{
    id: number,
     usuario_id: number,
    nome_exercicio: string,
    grupo_muscular: string,
    imagem_url: string,
    equipamento: string,
    carga: number,
    repeticoes: number
}

class MeuTreinoModel{

 AdicionarTreinos(dados : TreinoTypes)
 {
    const sql = "INSERT INTO ficha_treino (id, usuario_id, nome_exercicio, grupo_muscular, imagem_url, equipamento, carga, repeticoes) VALUES(?,?,?,?,?,?,?,?)"

    return new Promise((resolve, reject) => {

        baseDados.query(sql, [dados.id, dados.usuario_id, dados.nome_exercicio, dados.grupo_muscular, dados.imagem_url, dados.equipamento, dados.carga, dados.repeticoes], (error, result) => {
            if(error){
                return reject(error)
            }

            resolve(result)

        })
    })


 }

 exibirTreinos(id: number)
 {
    const sql = "SELECT * FROM ficha_treino WHERE usuario_id=?"
   

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

 atualizarDados(id: number, dados: TreinoTypes )
 {
   const sql = "UPDATE ficha_treino SET carga=?, repeticoes=? WHERE id=? "

   return new Promise((resolve, reject) => {
     
    baseDados.query(sql, [ dados.carga, dados.repeticoes, id], (error, result) => {

         if(error)
         {
            reject(error)
         }

         resolve(result)

    })

   })


 }

 deletar(id: number){
  const sql = "DELETE FROM ficha_treino WHERE id = ?"
  
  return new Promise((resolve, reject) => {
   
    baseDados.query(sql, [id], (error, result) => {
        
        if(error)
        {
            reject(`Erro:${error}`)
        }

        resolve(result)

    })

  })

 }

}

export default new MeuTreinoModel()