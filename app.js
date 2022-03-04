//Carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require("./routes/admin")
    const path = require("path") //Trabalhar com diretórios
    const mongoose = require('mongoose')
    const session = require("express-session")
    const flash = require("connect-flash")

//Configurações
    //Session
        app.use(session({
            secret: "mysecret",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    //Middleware
        app.use((req,res,next)=>{
            //variavel global
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            next()
        })

    //BodyParser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,    
            allowProtoMethodsByDefault: true,
        }}))
        app.set('view engine','handlebars')
    //Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/blogapp").then(()=>{
            console.log("Conectado ao mongo")
        }).catch((err)=>{
            console.log("Erro ao se conectar "+err)
        })
    // Public
        //Falar pro express que a pasta public está guardando nossos arquivos estáticos
        app.use(express.static(path.join(__dirname,"public")))
        //Criando um Middleware
        // app.use((req,res,next)=>{
        //     console.log("Hello Middleware")
        //     next() //Agora passa
        // })
        //Todas as requisições passam por aqui agora


//Rotas
        app.use('/admin',admin)


//Outros
const PORT = 8081;
app.listen(PORT, ()=>{
    console.log("Servidor Rodando")
})
