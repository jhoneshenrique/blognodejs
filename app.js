//Carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
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
    //


//Rotas



//Outros
const PORT = 8081;
app.listen(PORT, ()=>{
    console.log("Servidor Rodando")
})