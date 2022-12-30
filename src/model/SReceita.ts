import { Schema, model } from "mongoose"

const SReceita = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export default model("Receitas", SReceita)