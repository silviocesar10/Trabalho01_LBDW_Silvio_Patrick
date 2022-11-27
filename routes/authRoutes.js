import express from "express";
import { login } from "../controllers/authController.js";
import { verificarAdmin, verificarToken, verificarUsuario } from "../utils/verificarToken.js";

const router = express.Router();
router.post("/login", login);

router.get("/verificartoken", verificarToken, (req, res) => {
    res.status(200).json({ message: "Você está autenticado." });
});

router.get("/verificarusuario/:id", verificarUsuario, (req, res) => {
    res.status(200).json(
        { message: "O id passado é do usuário logado ou de um administrador." });
});

router.get("/verificaradmin/:id", verificarAdmin, (req, res) => {
    res.status(200).json({ message: "O id passado é de um administrador." });
});

export default router;