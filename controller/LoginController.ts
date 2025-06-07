
import { Request, Response } from "express"
import LoginModel from "../model/LoginModel"

class LoginController {

  
    async LoginClientes(req: Request, res: Response)
    {

        try{
            const {email, senha} = req.body
            const Model = await LoginModel.LoginClientes(email, senha)
            res.status(200).json(Model)

        }


      catch(error)
      {
        console.error(`Não foi possivel prosseguir com seu login ${error} `)
        res.status(404).send(error)
      }

    }


}


export default  new LoginController