import Aluno from "../models/Aluno.js";

export const createAluno = async (req, res, next) => {
    const aluno = new Aluno(req.body);
    try {
        const createdAluno = await aluno.save();
        res.status(201).json(createdAluno);
    } catch (error) {
        next(error);
    }
};
export const updateAluno = async (req, res, next) => {
    try {
        const updatedAluno = await Aluno.findByIdAndUpdate(req.params.id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json(updatedAluno);
    } catch (error) {
        next(error);
    }
};
export const deleteAluno = async (req, res, next) => {
    try {
        await Aluno.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Aluno excluído com sucesso." });
    } catch (error) {
        next(error);
    }
};
export const getAluno = async (req, res, next) => {
    try {
        const aluno = await Aluno.findById(req.params.id);
        res.status(200).json(aluno);
    } catch (error) {
        next(error);
    }
};
export const getAlunos = async (req, res, next) => {
    try {
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
    } catch (error) {
        next(error);
    }
};