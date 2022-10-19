import mongoose from "mongoose";
const { Schema } = mongoose;
const ExercicioSchema = new Schema({
    _id: false,
    tipo: TipoExercicio.schema,
    ordem: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },
    peso: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
    },
    repeticoes: {
        type: Number,
        min: 1,
        max: 100,
        required: true,
    },
    series: {
        type: Number,
        min: 1,
        max: 100,
        required: true,
    },
});
export default mongoose.model("Exercicio", ExercicioSchema);