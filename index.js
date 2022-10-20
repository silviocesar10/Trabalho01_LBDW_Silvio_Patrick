import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import routeAlunos from "./routes/routesAlunos.js";
import { errorHandling } from "./utils/error.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandling);
app.use("/api/alunos", routeAlunos);

app.listen(8080, () => {
    connectDatabase();
    console.log("Servidor rodando na porta 8080.");
});