const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

// O comando sync só deve ser executado quando for criar uma nova tabela. Post.sync({force:true})
module.exports = Post