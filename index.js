import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import routeAlunos from "./routes/alunosRoutes.js";
import routeTipoExercicio from "./routes/tipoExercicioRoutes.js";
import routeFicha from "./routes/fichaRoutes.js";
import routeGrupoMuscular from "./routes/grupoMuscularRoutes.js";
import routeInstrutor from "./routes/instrutorRoutes.js";
import { errorHandling } from "./utils/error.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandling);
app.use("/api/alunos", routeAlunos);
app.use("/api/tipoexercicio", routeTipoExercicio);
app.use("/api/ficha", routeFicha);
app.use("/api/grupomuscular", routeGrupoMuscular);
app.use("/api/instrutor", routeInstrutor);


app.listen(8080, () => {
    connectDatabase();
    console.log("Servidor rodando na porta 8080.");
});