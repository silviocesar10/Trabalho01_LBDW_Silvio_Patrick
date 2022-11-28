import express from "express";
import { createFicha, updateFicha, deleteFicha, getFicha, getFichas } from "../controllers/fichaController.js";
import { verificarAdmin } from "../utils/verificarToken.js";
const router = express.Router();

router.post("/", verificarAdmin, createFicha);
router.put("/:id", verificarAdmin, updateFicha);
router.delete("/:id", verificarAdmin, deleteFicha);
router.get("/:id", verificarAdmin, getFicha);
router.get("/", verificarAdmin, getFichas);
export default router;