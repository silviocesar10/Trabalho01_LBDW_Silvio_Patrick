import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
export const verificarToken = (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;
        if (!accessToken) {
            return next(
                createError(401, "Você não está autenticado."));
        }
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        req.aluno = decoded;
        next();
    } catch (error) {
        next(error);
    }
}
export const verificarUsuario = (req, res, next) => {
    verificarToken(req, res, () => {
        if (req.aluno.id === req.params.id || req.aluno.admin) {
            next();
        }
        else {
            return next(createError(403,
                "Você não tem permissão para acessar este recurso."));

        }
    });
}
export const verificarAdmin = (req, res, next) => {
    verificarToken(req, res, () => {
        if (req.aluno.admin) {
            next();
        }
        else {
            return next(createError(403,
                "Você não tem permissão para acessar este recurso."));

        }
    });
}