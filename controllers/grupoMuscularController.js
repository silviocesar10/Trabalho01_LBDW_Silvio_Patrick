import GrupoMuscular from "../models/GrupoMuscular.js";

export const createGrupoMuscular = async (req, res, next) => {
    const aluno = new GrupoMuscular(req.body);
    try {
        const createdGrupoMuscular = await aluno.save();
        res.status(201).json(createdGrupoMuscular);
    } catch (error) {
        next(error);
    }
};
export const updateGrupoMuscular = async (req, res, next) => {
    try {
        const updatedGrupoMuscular = await GrupoMuscular.findByIdAndUpdate(req.params.id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json(updatedGrupoMuscular);
    } catch (error) {
        next(error);
    }
};
export const deleteGrupoMuscular = async (req, res, next) => {
    try {
        await GrupoMuscular.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "GrupoMuscular excluído com sucesso." });
    } catch (error) {
        next(error);
    }
};
export const getGrupoMuscular = async (req, res, next) => {
    try {
        const aluno = await GrupoMuscular.findById(req.params.id);
        res.status(200).json(aluno);
    } catch (error) {
        next(error);
    }
};
export const getGrupoMusculars = async (req, res, next) => {
    try {
        const alunos = await GrupoMuscular.find();
        res.status(200).json(alunos);
    } catch (error) {
        next(error);
    }
};