import mongoose from "mongoose";

const scoreSchema = mongoose.Schema({
    jogador: {
        type: String,
        required: true
    },
    categoria: {
        type: String, // Fix: Changed data type to "String"
        required: true
    },
    score: {
        type: String, // Fix: Changed data type to "String"
        required: true
    },
    data : {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

const Score = mongoose.model("Score", scoreSchema, "Score");

export default Score;