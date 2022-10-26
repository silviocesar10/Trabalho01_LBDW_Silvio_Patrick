import express from "express";
import { createExercicio, updateExercicio, deleteExercicio, getExercicio, getExercicios } from "../controllers/exercicioController.js";

const router = express.Router();

router.post("/", createExercicio);
router.put("/:id", updateExercicio);
router.delete("/:id", deleteExercicio);
router.get("/:id", getExercicio);
router.get("/", getExercicios);
export default router;