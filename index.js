const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const { Sequelize } = require('sequelize');

// Config    
    // Template engine
        app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
        app.set('view engine','handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())    
    // Conexão MySQL
        const sequelize = new Sequelize('teste', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });

// Rotas
app.get('/cad', function (req, res) {
    res.render('formulario')
});

app.post('/add', function (req, res) {
    titulo = req.body.titulo
    conteudo = req.body.conteudo

    res.send('Formulario recebido!!!'+
            'O tilulo é: ' +  titulo +
            'O conteudo é: '+ conteudo)

});



//Subindo o servidor
app.listen(8081, function () {
    console.log('Servidor rodando na url http://localhost:8081')
});

