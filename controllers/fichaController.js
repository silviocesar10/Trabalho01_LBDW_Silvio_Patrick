import Ficha from "../models/Ficha.js";

export const createFicha = async (req, res, next) => {
    const aluno = new Ficha(req.body);
    try {
        const createdFicha = await aluno.save();
        res.status(201).json(createdFicha);
    } catch (error) {
        next(error);
    }
};
export const updateFicha = async (req, res, next) => {
    try {
        const updatedFicha = await Ficha.findByIdAndUpdate(req.params.id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json(updatedFicha);
    } catch (error) {
        next(error);
    }
};
export const deleteFicha = async (req, res, next) => {
    try {
        await Ficha.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Ficha excluído com sucesso." });
    } catch (error) {
        next(error);
    }
};
export const getFicha = async (req, res, next) => {
    try {
        const aluno = await Ficha.findById(req.params.id);
        res.status(200).json(aluno);
    } catch (error) {
        next(error);
    }
};
export const getFichas = async (req, res, next) => {
    try {
        const alunos = await Ficha.find();
        res.status(200).json(alunos);
    } catch (error) {
        next(error);
    }
};