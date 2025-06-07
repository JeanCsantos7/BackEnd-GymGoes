import { Request, Response } from "express";
import CadastroModel from "../model/CadastroModel";

class CadastroController {
  async criarConta(req: Request, res: Response) {
    try {
      const dados = req.body;
      const Model = await CadastroModel.criarConta(dados);
      res.status(200).json(`Cadastro Realizado com Sucesso ${Model}`);
    } catch (error) {
      res
        .status(404)
        .send(error);
      console.log(error);
    }
  }

  async buscarIMC(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);

    const Model = await CadastroModel.buscarIMC(id);
    res.status(200).json(Model);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar IMC.");
  }
}

}

export default new CadastroController();
