import express from "express";
import { createTipoExercicio, updateTipoExercicio, deleteTipoExercicio, getTipoExercicio, getTipoExercicios } from "../controllers/tipoExercicioController.js";
import { verificarAdmin } from "../utils/verificarToken.js";
const router = express.Router();

router.post("/", verificarAdmin, createTipoExercicio);
router.put("/:id", verificarAdmin, updateTipoExercicio);
router.delete("/:id", verificarAdmin, deleteTipoExercicio);
router.get("/:id", verificarAdmin, getTipoExercicio);
router.get("/", verificarAdmin, getTipoExercicios);
export default router;