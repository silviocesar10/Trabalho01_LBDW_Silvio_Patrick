import mongoose from "mongoose";
const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL2);
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on("disconnected", () => {
    console.log("Desconectado do MongoDB.");
});
mongoose.connection.on("connected", () => {
    console.log("Conectado ao MongoDB.");
});
mongoose.connection.on("error", (error) => {
    console.log(`Erro no MongoDB:\n${error}`);
});
export default connectDatabase;