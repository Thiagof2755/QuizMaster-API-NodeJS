import express from "express";
import Question from "./QuestionRouters.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ 
            titulo: "Api Para QuizMaster", 
            version: "1.0.0",
            autor: "Thiago Alves ",
            descricao: "Uma API para criar e gerenciar perguntas e respostas de um quiz.",
            comoUsar: "Consulte a documentação para obter instruções sobre como usar a API",
            GitHub_Documentação: "https://github.com/Thiagof2755/QuizMaster-API-NodeJS"
        });
    })

    app.use(express.json(), Question);
};

export default routes;