import mongoose from "mongoose";
import Aluno from "../models/Aluno.js";
import bcrypt from "bcryptjs";

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_LOCAL);
    } catch (error) {
        throw error;
    }
};

const populateDatabase = async () => {
    const alunos = [
        {
            nome: "João",
            dataNascimento: new Date(2000, 1, 1),
            sexo: "M",
            email: "joao@email.com",
            senha: await bcrypt.hash("123456", 10),
            ativo: true,
        },
        {
            nome: "Maria",
            dataNascimento: new Date(1990, 1, 1),
            sexo: "F",
            email: "maria@email.com",
            senha: await bcrypt.hash("123456", 10),
            ativo: true,
        },
        {
            nome: "José",
            dataNascimento: new Date(1985, 1, 1),
            sexo: "M",
            email: "jose@email.com",
            senha: await bcrypt.hash("123456", 10),
            ativo: false,
        },
    ];

    if (await Aluno.countDocuments() === 0) {
        await Aluno.insertMany(alunos);
        console.log("Alunos populados com sucesso.");
    }
};

mongoose.connection.on("disconnected", async () => {
    console.log("Desconectado do MongoDB.");
});

mongoose.connection.on("connected", async () => {
    await populateDatabase();
    console.log("Conectado ao MongoDB.");
});

mongoose.connection.on("error", async (error) => {
    console.log(`Erro no MongoDB:\n${error}`);
});

export default connectDatabase;