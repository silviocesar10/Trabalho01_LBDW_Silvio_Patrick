import express from "express";
import { createAluno, updateAluno, deleteAluno, getAluno, getAlunos } from "../controllers/alunoController.js";
import { verificarToken } from "../utils/verificarToken.js";
const router = express.Router();
//router.post("/", async (req, res) => {
//const aluno = new Aluno(req.body);
//try {
//const novoAluno = await aluno.save();
//res.status(201).json(novoAluno);
//} catch (error) {
//  throw error;
//}
//});

//router.post("/", (req, res) => {
//res.send("Rota de cadastro de aluno.");
//});

//router.put("/:id", (req, res) => {
//const aluno = new Aluno(req.body);

//res.send("Rota de atualização de aluno.");
//});

//router.delete("/:id", (req, res) => {
//res.send("Rota de remoção de aluno.");
//});
//router.get("/:id", (req, res) => {
//res.send("Rota de busca de aluno.");
//});
//router.get("/", (req, res) => {
//res.send("Rota de listagem de alunos.");
//});

router.post("/", verificarToken, createAluno);
router.put("/:id", verificarToken, updateAluno);
router.delete("/:id", verificarToken, deleteAluno);
router.get("/:id", verificarToken, getAluno);
router.get("/", verificarToken, getAlunos);
export default router;