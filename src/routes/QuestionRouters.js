import express from "express";
import QuestionController from "../controllers/QuestionController.js";
import ScoreController from "../controllers/ScoreController.js";

const routes = express.Router();

routes.get("/AllQuestion", QuestionController.getAllQuestions);
routes.post("/CreateQuestion", QuestionController.createQuestion);
routes.get("/Question", QuestionController.getQuestion);
routes.post("/ValidateAnswer", QuestionController.ValidateAnswer);
routes.get("/AllScores", ScoreController.getAllScores);
routes.post("/CreateScore", ScoreController.createScore);


export default routes;


