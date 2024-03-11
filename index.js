const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')


// Config    
    // Template engine
        app.engine('handlebars', handlebars.engine({
            defaultLayout:'main',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            }
        }))
        app.set('view engine','handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())    
    

// Rotas
    // Listar posts
app.get('/', function(req,res){
    Post.findAll({order:[['id','DESC']]}).then(function(posts){
        res.render('home',{posts:posts})
    })
    
})

    // Inserir posts - renderizando formulario
app.get('/cad', function (req, res) {
    res.render('formulario')
});

    // Inserir posts - inserir inserindo dados do formulário no banco
app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        res.redirect('/') 

    }).catch(function(erro) {
        res.send('Ops, houve um erro aqui: '+ erro)})

});

    // Deletar posts
app.get('/deletar/:id', function(req, res){
    Post.destroy({where:{'id': req.params.id}}).then(function(){
        res.send('Post excluído com sucesso!!!')
        
    }).catch(function(erro){
        res.send('Esta postagem não existe')
    })
})



//Subindo o servidor
app.listen(8081, function () {
    console.log('Servidor rodando na url http://localhost:8081')
});

