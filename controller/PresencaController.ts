import { Request, Response } from "express";
import PresencaModel from "../model/PresencaModel";

class CheckIN {
  async checkIN(req: Request, res: Response) {
    const { id, nome } = req.body;

    try {
      const checkInExistente = await PresencaModel.buscarPorID(id);

      if (
        checkInExistente &&
        Array.isArray(checkInExistente) &&
        checkInExistente.length > 0
      ) {
        await PresencaModel.atualizarFrequencia(id);
      } else {
        await PresencaModel.inserirPrimeiroRegistro(id, nome);
      }

      res.status(200).json({ mensagem: " Check-in registrado com sucesso!" });
    } catch (error) {
      res.status(404).send(error);
    }
  }

   async exibirCheckIn(req: Request, res: Response)
   {
     try {
       const dados = req.params.nome
       const Model = await PresencaModel.exibirCheckIn(dados)
       res.status(200).json(Model)

     } 
     
     catch (error) {
       res.status(404).send(error)  

     }

   }
}

export default new CheckIN();
