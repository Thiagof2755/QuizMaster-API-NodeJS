import express from "express";

import QuestionController from "../controllers/QuestionController.js";

const routes = express.Router();

routes.get("/AllQuestion", QuestionController.getAllQuestions);
routes.post("/CreateQuestion", QuestionController.createQuestion);
routes.get("/Question", QuestionController.getQuestion);

export default routes;


