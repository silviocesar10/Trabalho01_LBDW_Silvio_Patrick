import express from "express";
import { createGrupoMuscular, updateGrupoMuscular, deleteGrupoMuscular, getGrupoMuscular, getGrupoMusculars } from "../controllers/grupoMuscularController.js";
import { verificarAdmin } from "../utils/verificarToken.js";
const router = express.Router();

router.post("/", verificarAdmin, createGrupoMuscular);
router.put("/:id", verificarAdmin, updateGrupoMuscular);
router.delete("/:id", verificarAdmin, deleteGrupoMuscular);
router.get("/:id", verificarAdmin, getGrupoMuscular);
router.get("/", verificarAdmin, getGrupoMusculars);
export default router;