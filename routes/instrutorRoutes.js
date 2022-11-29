import express from "express";
import { createInstrutor, updateInstrutor, deleteInstrutor, getInstrutor, getInstrutors } from "../controllers/instrutorController.js";
import { verificarToken } from "../utils/verificarToken.js";
const router = express.Router();

router.post("/", verificarToken, createInstrutor);
router.put("/:id", verificarToken, updateInstrutor);
router.delete("/:id", verificarToken, deleteInstrutor);
router.get("/:id", verificarToken, getInstrutor);
router.get("/", verificarToken, getInstrutors);
export default router;