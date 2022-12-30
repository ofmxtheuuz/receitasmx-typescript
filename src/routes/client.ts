import express, { Request, Response, NextFunction } from "express"
import * as controller from "../controllers/ClientController";
const router = express.Router();

router.get("/", controller.Index)
router.get("/adicionar", controller.AddReceita)
router.get("/editar/:id", controller.EditReceita)
router.get("/:id", controller.ViewReceita)

router.post("/receitas/add", controller.AddReceitaService)
router.post("/deletar", controller.DeleteReceita)
router.post("/receitas/edit", controller.EditReceitaService)

export default router;