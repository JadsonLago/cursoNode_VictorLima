const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const { Sequelize } = require('sequelize');

// Config    
    // Template engine
        app.engine('handlebars', handlebars({defaultLayout:'main'}))
        app.set('view engine','handlebars')
    // Conexão MySQL

        const sequelize = new Sequelize('teste', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });

// Rotas
app.get('cad/', function (req, res) {
    res.send('Seja Rota de cadatro de POSTS')
});




//Subindo o servidor
app.listen(8081, function () {
    console.log('Servidor rodando na url http://localhost:8081')
});

