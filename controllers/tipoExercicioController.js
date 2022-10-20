import TipoExercicio from "../models/TipoExercicio.js";

export const createTipoExercicio = async (req, res, next) => {
    const aluno = new TipoExercicio(req.body);
    try {
        const createdTipoExercicio = await aluno.save();
        res.status(201).json(createdTipoExercicio);
    } catch (error) {
        next(error);
    }
};
export const updateTipoExercicio = async (req, res, next) => {
    try {
        const updatedTipoExercicio = await TipoExercicio.findByIdAndUpdate(req.params.id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json(updatedTipoExercicio);
    } catch (error) {
        next(error);
    }
};
export const deleteTipoExercicio = async (req, res, next) => {
    try {
        await TipoExercicio.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "TipoExercicio excluído com sucesso." });
    } catch (error) {
        next(error);
    }
};
export const getTipoExercicio = async (req, res, next) => {
    try {
        const aluno = await TipoExercicio.findById(req.params.id);
        res.status(200).json(aluno);
    } catch (error) {
        next(error);
    }
};
export const getTipoExercicios = async (req, res, next) => {
    try {
        const alunos = await TipoExercicio.find();
        res.status(200).json(alunos);
    } catch (error) {
        next(error);
    }
};