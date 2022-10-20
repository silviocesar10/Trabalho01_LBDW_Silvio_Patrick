import express from "express";
import { createInstrutor, updateInstrutor, deleteInstrutor, getInstrutor, getInstrutors } from "../controllers/instrutorController.js";

const router = express.Router();

router.post("/", createInstrutor);
router.put("/:id", updateInstrutor);
router.delete("/:id", deleteInstrutor);
router.get("/:id", getInstrutor);
router.get("/", getInstrutors);
export default router;