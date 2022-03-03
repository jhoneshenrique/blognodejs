//Carregando módulos 
const express = require("express")
const router = express.Router()
//Carregando mongoose
const mongoose = require("mongoose")
require("../models/Categoria")   //é o mesmo nome dado na definição do model
const Categoria = mongoose.model("categorias")

//As rotas vão aqui

//Rota painel principal
router.get('/', (req,res)=>{
    res.render("admin/index")
})

//Rota de listagem de posts
router.get('/posts',(req,res)=>{
    res.send("Página de posts")
})

//Cadastro de categoria
router.get('/categorias',(req,res)=>{
    res.render("admin/categorias")
})

//Rota que dá direto para o formulário
router.get('/categorias/add',(req,res)=>{
    res.render("admin/addcategoria")
})

router.post('/categorias/nova', (req,res)=>{
    const novaCategoria = {
        //Carrega dados do formulário
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categoria(novaCategoria).save().then(()=>{
        console.log("Categoria Salva com Sucesso!")
    }).catch((err)=>{
        console.log("Problema ao salvar")
    })
})

module.exports = router;