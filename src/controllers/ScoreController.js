import Score from "../models/Score.js";


class ScoreController {


    static async getAllScores(req, res) {
        try {
            const scores = await Score.find();
            res.json(scores);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar scores." });
        }
    }

    static async createScore(req, res) {
        try {
            const novoScore = await Score.create(req.body);
            res.status(201).json({ message: "Score criado com sucesso", novoScore });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    }



}

export default ScoreController