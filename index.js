const express = require('express');
const app = express();

//criando rotas

app.get('/', function (req, res) {
    res.send('Seja bem vindo ao app')
});

app.get('/sobre', function (req, res) {
    res.send('Minha Página Sobre')
});

app.get('/blog', function (req, res) {
    res.send('Bem vindo ao Blog')
})




//Subindo o servidor
app.listen(8081, function () {
    console.log('Servidor rodando na url http://localhost:8081')
});

