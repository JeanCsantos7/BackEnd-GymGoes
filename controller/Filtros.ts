import { Request, Response } from "express";
import FiltrosModel from "../model/Filtros";

class FiltroController {
  async filtrarNomeExercicio(req: Request, res: Response) {
    try {
      const nome = req.params.nome;
      const Model = await FiltrosModel.filtrarNomeExercicio(nome);
      res.status(200).json(Model);
    } catch (error) {
      res.status(404).send("Não foi possível concluir sua solicitação.");
      console.log(error);
    }
  }

  async filtrarNomeUsuario(req: Request, res: Response) {
    try {
      const nomeUser = req.params.nome;
      const Model = await FiltrosModel.filtrarNomeUsuario(nomeUser);
      res.status(200).json(Model);
    } catch (error) {
      res.status(404).send("Não foi possível concluir sua solicitação.");
      console.log(error);
    }
  }

  async filtrarEquipamento(req: Request, res: Response) {
    try {
      const equipamento = req.params.equipamento;
      const Model = await FiltrosModel.filtrarEquipamento(equipamento);
      res.status(200).json(Model);
    } catch (error) {
      res.status(404).send("Não foi possível concluir sua solicitação.");
      console.log(error);
    }
  }

  async filtrarGrupoMuscular(req: Request, res: Response) {
    try {
      const grupo_muscular = req.params.grupo_muscular;
      const Model = await FiltrosModel.filtrarGrupoMuscular(grupo_muscular);
      res.status(200).json(Model);
    } catch (error) {
      res.status(404).send("Não foi possível concluir sua solicitação.");
      console.log(error);
    }
  }

  async filtroCombinado(req: Request, res: Response) {
    try {
      const { usuario_id, equipamento, grupo_muscular } = req.params;
      
      const Model = await FiltrosModel.filtroCombinado(
        parseInt(usuario_id),
        equipamento,
        grupo_muscular
      );
      res.status(200).json(Model);
    } catch (error) {
      res.status(404).send("Não foi possível concluir sua solicitação.");
      console.log(error);
    }
  }
}

export default new FiltroController();
