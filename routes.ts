import { Router } from "express"
import dotenv from "dotenv";
import CadastroController from "./controller/CadastroController";
import LoginController from "./controller/LoginController";
import CadastroExerciciosController from "./controller/CadastroExerciciosController";
import MeuTreino from "./controller/MeuTreino";
import Filtros from "./controller/Filtros";
import PerfilController from "./controller/PerfilController";
import PresencaController from "./controller/PresencaController";

dotenv.config()

const Routes = Router()

Routes.post("/Cadastro", CadastroController.criarConta)
Routes.post("/Login", LoginController.LoginClientes)
Routes.post("/checkIn", PresencaController.checkIN)
Routes.post("/CadastroExercicios", CadastroExerciciosController.cadastrarExercicios)
Routes.post("/AdicionarExercicios", MeuTreino.AdicionarTreinos)
Routes.get("/exibirPresenca/:nome", PresencaController.exibirCheckIn)
Routes.get("/buscarIMC/:id", CadastroController.buscarIMC)
Routes.get("/exercicio/:grupo_muscular", CadastroExerciciosController.exibirExercicios)
Routes.get("/filtro/:nome", Filtros.filtrarNomeExercicio)
Routes.get("/filtroNome/:nome", Filtros.filtrarNomeUsuario)
Routes.get("/filtroEquipamentos/:equipamento", Filtros.filtrarEquipamento)
Routes.get("/filtroMusculo/:grupo_muscular", Filtros.filtrarGrupoMuscular)
Routes.get("/exibirExercicios/:id", MeuTreino.exibirTreinos )
Routes.get(`/filtroCombinado/:usuario_id/:equipamento/:grupo_muscular`, Filtros.filtroCombinado)
Routes.delete("/deletarExercicio/:id", MeuTreino.deletar)
Routes.put("/EditarPerfil/:id", PerfilController.editarPerfil)
Routes.put("/atualizarDados/:id", MeuTreino.atualizarDados)



export default Routes
