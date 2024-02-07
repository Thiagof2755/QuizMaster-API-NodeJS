import Question from "../models/Question.js";

class QuestionController {
    static async getAllQuestions(req, res) {
        const apiKey = req.query.apiKey;

        // Verifique se a chave de autenticação é válida
        if (apiKey !== process.env.API_KEY) {
            return res.status(401).json({ message: "Chave de autenticação inválida." });
        }

        // Se a chave for válida, continue com a lógica da função
        try {
            const questions = await Question.find();
            res.json(questions);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar perguntas." });
        }
    }

    static async createQuestion(req, res) {
        const apiKey = req.query.apiKey;

        // Verifique se a chave de autenticação é válida
        if (apiKey !== process.env.API_KEY) {
            return res.status(401).json({ message: "Chave de autenticação inválida." });
        }

        // Se a chave for válida, continue com a lógica da função
        try {
            const novaPergunta = await Question.create(req.body);
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
            res.json(perguntas);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar perguntas." });
        }
    }
    

    static async ValidateAnswer(req, res) {
        const { id, resposta } = req.body;
        try {
            const question = await Question.findById(id);
            if (question) {
                if (question.resposta_correta === resposta) {
                    res.status(200).json({ message: "Resposta correta!" });
                } else {
                    res.status(400).json({ message: "Resposta incorreta!" });
                }
            } else {
                res.status(404).json({ message: "Pergunta não encontrada." });
            }
        } catch (error) {
            res.status(500).json({ message: "Erro ao validar resposta." });
        }
    }   
}

export default QuestionController;
