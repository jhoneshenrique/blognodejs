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

//Rota de cadastro de categoria
router.post('/categorias/nova', (req,res)=>{
    var erros = [];

    //SE o nome não foi adicionado
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome ==null){
        //push() serve para adicionar um item ao array
        erros.push({texto:"Nome inválido"})
    }

    //Se o slug não foi adicionado
    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug ==null){
        erros.push({texto:"Slug inválido"})
    }
    
    //Se o nome da categoria for muito pequeno
    if(req.body.nome.length < 2){
        erros.push({texto:"Nome da categoria é muito pequeno"})
    }

    //Caso aja erros, o array é passado para a view
    if(erros.length > 0){
        res.render("admin/addcategoria",{erros: erros})
    }else{
        const novaCategoria = {
            //Carrega dados do formulário
            nome: req.body.nome,
            slug: req.body.slug
        }
    
        new Categoria(novaCategoria).save().then(()=>{
            req.flash("success_msg","Categoria criada com sucesso!")
            res.redirect("/admin/categorias")
        }).catch((err)=>{
            req.flash("erro_msg","Houve um erro ao salvar a categoria!")
            res.redirect('/admin')
        })
    }
})

module.exports = router;