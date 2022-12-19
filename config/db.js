import mongoose from "mongoose";
import Aluno from "../models/Aluno.js";
import bcrypt from "bcryptjs";

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL_LOCAL);
    } catch (error) {
        throw error;
    }
};

const populateDatabase = async () => {
    const alunos = [
        {
            nome: "João",
            dataNascimento: new Date(2000, 1, 1),
            cpf: "11111111111",
            sexo: "M",
            telefone: "28999998888",
            email: "joao@email.com",
            senha: await bcrypt.hash("123456", 10),
            ativo: true,
        },
        {
            nome: "Maria",
            dataNascimento: new Date(1990, 1, 1),
            cpf: "22222222222",
            sexo: "F",
            telefone: "28999997777",
            email: "maria@email.com",
            senha: await bcrypt.hash("123456", 10),
            ativo: true,
        },
        {
            nome: "José",
            dataNascimento: new Date(1985, 1, 1),
            cpf: "33333333333",
            sexo: "M",
            telefone: "28999996666",
            email: "jose@email.com",
            senha: await bcrypt.hash("123456", 10),
            ativo: false,
        },
    ];

    // await Aluno.deleteMany({});
    // console.log("Alunos deletados com sucesso.");
    if ((await Aluno.countDocuments({})) === 0) {
        await Aluno.insertMany(alunos);
        console.log("Alunos inseridos com sucesso.");
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