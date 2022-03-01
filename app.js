//Carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require("./routes/admin")
    const path = require("path") //Trabalhar com diretórios
    //const mongoose = require('mongoose')

//Configurações
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
        //Em breve
    // Public
        //Falar pro express que a pasta public está guardando nossos arquivos estáticos
        app.use(express.static(path.join(__dirname,"public")))


//Rotas
        app.use('/admin',admin)


//Outros
const PORT = 8081;
app.listen(PORT, ()=>{
    console.log("Servidor Rodando")
})
