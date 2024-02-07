import express from "express";
import livro from "./QuestionRouters.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ 
            titulo: "Api de livros", 
            version: "1.0.0",
            autor: "Thiago Alves ",
            descricao: "Uma API para gerenciar livros no MongoDB",
            comoUsar: "Consulte a documentação para obter instruções sobre como usar a API",
            GitHub_Documentação: "https://github.com/Thiagof2755/api-node-rest"
        });
    })

    app.use(express.json(), livro);
};

export default routes;