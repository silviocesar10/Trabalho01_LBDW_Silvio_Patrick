import express from "express";
import { createInstrutor, updateInstrutor, deleteInstrutor, getInstrutor, getInstrutors } from "../controllers/instrutorController.js";
import { verificarAdmin } from "../utils/verificarToken.js";
const router = express.Router();

router.post("/", verificarAdmin, createInstrutor);
router.put("/:id", verificarAdmin, updateInstrutor);
router.delete("/:id", verificarAdmin, deleteInstrutor);
router.get("/:id", verificarAdmin, getInstrutor);
router.get("/", verificarAdmin, getInstrutors);
export default router;