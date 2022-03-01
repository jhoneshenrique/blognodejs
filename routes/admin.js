//Carregando módulos 
const express = require("express")
const router = express.Router()

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

module.exports = router;