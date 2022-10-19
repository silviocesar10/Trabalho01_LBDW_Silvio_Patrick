import mongoose from "mongoose";
const { Schema } = mongoose;
const InstrutorSchema = new Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true,
        },
        dataNascimento: {
            type: Date,
            required: true,
        },
        sexo: {
            type: String,
            required: true,
            trim: true,
            enum: ["M", "F"],
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            index: true,
        },
        senha: {
            type: String,
            required: true,
        },
        ativo: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);
export default mongoose.model("Instrutor", InstrutorSchema);