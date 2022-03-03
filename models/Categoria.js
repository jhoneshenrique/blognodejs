const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//Definindo Model
const Categoria = new Schema({
    nome: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        //Default serve para definir um valor padrão caso o usuário não passe o valor
        default: Date.now()
    }
})


mongoose.model("categorias",Categoria)