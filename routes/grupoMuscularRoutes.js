import express from "express";
import { createGrupoMuscular, updateGrupoMuscular, deleteGrupoMuscular, getGrupoMuscular, getGrupoMusculars } from "../controllers/grupoMuscularController.js";
import { verificarToken } from "../utils/verificarToken.js";
const router = express.Router();

router.post("/", verificarToken, createGrupoMuscular);
router.put("/:id", verificarToken, updateGrupoMuscular);
router.delete("/:id", verificarToken, deleteGrupoMuscular);
router.get("/:id", verificarToken, getGrupoMuscular);
router.get("/", verificarToken, getGrupoMusculars);
export default router;