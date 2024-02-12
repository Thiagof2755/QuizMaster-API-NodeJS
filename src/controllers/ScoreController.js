import Score from "../models/Score.js";


class ScoreController {


 static async getAllScores(req, res) {
     try {
         const scores = await Score.find();
         const formattedScores = scores.map(score => ({
             ...score._doc,
             data: new Date(score.data).toLocaleString()
         }));
         res.json(formattedScores);
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