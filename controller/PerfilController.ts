import { Request, Response } from "express"
import PerfilModel from "../model/PerfilModel"


class PerfilController{
  
    async editarPerfil(req: Request, res: Response)
    {  
      

      try {
         const id = parseInt(req.params.id)
         const response = req.body
         const Model = await PerfilModel.editarPerfil(response ,id)
         res.status(200).json(Model)
      } 
      
      catch (error) {
         res
        .status(404)
        .send(error);
      console.log(error);
      }

 
    }

}


export default new PerfilController()