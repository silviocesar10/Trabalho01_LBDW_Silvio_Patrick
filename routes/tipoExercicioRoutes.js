import express from "express";
import { createTipoExercicio, updateTipoExercicio, deleteTipoExercicio, getTipoExercicio, getTipoExercicios } from "../controllers/tipoExercicioController.js";

const router = express.Router();

router.post("/", createTipoExercicio);
router.put("/:id", updateTipoExercicio);
router.delete("/:id", deleteTipoExercicio);
router.get("/:id", getTipoExercicio);
router.get("/", getTipoExercicios);
export default router;