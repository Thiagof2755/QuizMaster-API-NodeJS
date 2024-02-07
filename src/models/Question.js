import mongoose  from "mongoose";

const questionSchema =  mongoose.Schema({
    pergunta: {
        type: String,
        required: true
    },
    opcoes: {
        type: [String],
        required: true
    },
    resposta_correta: {
        type: String,
        required: true
    }
}, { versionKey: false });

const Question = mongoose.model("Question", questionSchema, "Question");

export default Question;
