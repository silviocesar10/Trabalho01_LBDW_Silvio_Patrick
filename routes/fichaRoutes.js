import express from "express";
import { createFicha, updateFicha, deleteFicha, getFicha, getFichas } from "../controllers/fichaController.js";
import { verificarToken } from "../utils/verificarToken.js";
const router = express.Router();

router.post("/", verificarToken, createFicha);
router.put("/:id", verificarToken, updateFicha);
router.delete("/:id", verificarToken, deleteFicha);
router.get("/:id", verificarToken, getFicha);
router.get("/", verificarToken, getFichas);
export default router;