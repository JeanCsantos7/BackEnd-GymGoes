import baseDados from "../database/baseDados"



class FiltrosModel{

   filtrarNomeExercicio(nome: string){

     const sql = "SELECT * FROM exercicios WHERE nome = ?"

     return new Promise((resolve, reject) => {
     
        baseDados.query(sql, [nome], (error, result) => {
          
            if(error)
            {
                reject(error)
            }

            resolve(result)
         

        } )

     })
     
   }

   filtrarNomeUsuario(nomeUser: string){
    const sql = "SELECT * FROM usuarios WHERE nome = ?"

    return new Promise((resolve, reject) => {
       baseDados.query(sql, [nomeUser], (error, result) => {
          
        if(error)
        {
            reject(error)
        }

        resolve(result)

       })

    })

   }

   filtrarEquipamento(equipamento: string){
    const sql = "SELECT * FROM ficha_treino WHERE equipamento = ?"

     return new Promise((resolve, reject) => {
     
        baseDados.query(sql, [equipamento], (error, result) => {
          
            if(error)
            {
                reject(error)
            }

            resolve(result)
         

        } )

     }) 
   }

   filtrarGrupoMuscular(grupo_muscular: string){
    const sql = "SELECT * FROM ficha_treino WHERE grupo_muscular = ?"

     return new Promise((resolve, reject) => {
     
        baseDados.query(sql, [grupo_muscular], (error, result) => {
          
            if(error)
            {
                reject(error)
            }

            resolve(result)
         

        } )

     }) 

   }

   filtroCombinado(usuario_id: number, equipamento: string, grupo_muscular: string)
   {
     const sql = "SELECT usuario_id, nome_exercicio, imagem_url, carga, repeticoes, equipamento, grupo_muscular FROM ficha_treino WHERE usuario_id = ? AND  equipamento = ? AND grupo_muscular = ?"
     
     return new Promise((resolve, reject) => {
     
        baseDados.query(sql, [usuario_id, equipamento, grupo_muscular], (error, result) => {

       if(error)
       {
        reject(error)

       }

       resolve(result)

     })

     })
     
  

   }

}


export default new FiltrosModel()