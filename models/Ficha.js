import mongoose from "mongoose";
import Exercicio from "./Exercicio.js";
import TipoExercicio from "./TipoExercicio.js";
const { Schema } = mongoose;
const FichaSchema = new Schema(
    {
        aluno: { type: Schema.Types.ObjectId, ref: "Aluno" },
        instrutor: { type: Schema.Types.ObjectId, ref: "Instrutor" },
        ativa: {
            type: Boolean,
            required: true,
        },
        dataInicio: {
            type: Date,
            required: true,
        },
        exercicios: [
            Exercicio.schema,
        ],
        execucoes: [
            {
                dataHoraInicio: {
                    type: Date,
                    required: true,
                },
                dataHoraFim: {
                    type: Date,
                    required: true,
                },
                observacoes: {
                    type: String,
                    trim: true,
                },
            },
        ],
    },
    { timestamps: true }
);
export default mongoose.model("Ficha", FichaSchema);