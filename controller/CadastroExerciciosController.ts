import { Request, Response } from "express";
import CadastroExerciciosModel from "../model/CadastroExerciciosModel";

class CadastroExercicios {
  async exibirExercicios(req: Request, res: Response) {
    try {
      const musculatura = req.params.grupo_muscular
      const Model = await CadastroExerciciosModel.exibirExercicios(musculatura);
      res.status(200).json(Model);
    } 
    
    catch (error) {
       
      res.status(404).send(`Não Foi Possível Exibir o exercicio: ${error}`)

    }
  }

 async cadastrarExercicios(req: Request, res: Response)
 {
     try {
       const dados = req.body
       const Model = CadastroExerciciosModel.cadastrarExercicios(dados)
       res.status(200).json(Model)
      
     } 
     
     
     catch (error) {
      res.status(404).send(`Não Foi Possível Concluir o Cadastro do exercicio: ${error}`)
     }
 }

}

export default new CadastroExercicios();
