import Question from "../models/Question.js";

class QuestionController {
    static getAllQuestions = async (_, res) => {
        try {
            const questions = await Question.find();
            res.json(questions);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar perguntas." });
        }
    };    
    static async createQuestion(req, res) {
        try {
            const novaPergunta = await Question.create(req.body);;

            res.status(201).json({ message: "Pergunta criada com sucesso", novaPergunta });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    }

    static async getQuestion(req, res) {
        const limit = parseInt(req.query.limit) || 10; 
        try {
            const questions = await Question.aggregate([{ $sample: { size: limit } }]);
    
            const perguntas = questions.map((question) => {
                const { resposta_correta, ...pergunta } = question;
                return pergunta;
            });
            
            // Enviar as perguntas para o cliente
            res.json(perguntas);
        } catch (error) {
            // Lidar com erros
            res.status(500).json({ message: "Erro ao buscar perguntas." });
        }
    }    
}    
    

export default QuestionController;
