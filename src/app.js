import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import cors from "cors"; // Importe o módulo cors
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

const app = express();

// Use o middleware cors
app.use(cors());

routes(app);

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

export default app;
