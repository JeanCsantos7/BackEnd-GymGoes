import MeuTreinoModel from "../model/MeuTreinoModel"
import { Response, Request } from "express"

class MeuTreino{

  async AdicionarTreinos(req: Request, res: Response)
  {

    try {
        const dados = req.body
        const Model = await MeuTreinoModel.AdicionarTreinos(dados)
        res.status(200).json(Model)



    } 
    
    
    
    catch (error) {
        console.error(error)
        res.status(404).send("Não foi Possível conluir sua solicitação")
       
    }
     
     

     
  }


  async exibirTreinos(req: Request, res: Response)
  {
  

    try {
      const id = parseInt(req.params.id)
      const Model = await MeuTreinoModel.exibirTreinos(id)
      res.status(200).json(Model)



  } 
  
  
  
  catch (error) {
      console.error(error)
      res.status(404).send("Não foi Possível conluir sua solicitação")
     
  }



  }

  async atualizarDados(req: Request, res: Response)
  {
     try {
       const id = parseInt(req.params.id)
       const dados = req.body
       const Model = await MeuTreinoModel.atualizarDados(id, dados ) 
       res.status(200).json(Model)
    } 
    catch (error) {
      console.error(error)
      res.status(404).send("Não foi possível concluir sua solicitação")  
    }

  }

  async deletar(req: Request, res: Response)
  {
   

    try {
       const id = parseInt(req.params.id)
       const Model = await MeuTreinoModel.deletar(id) 
      res.status(200).json(Model)
    } 
    catch (error) {
      console.error(error)
      res.status(404).send("Não foi possível concluir sua solicitação")  
    }


  }

}

export default new MeuTreino()