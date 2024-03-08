//Método de conexão - Versão domuentação NPM - Sequelize
const { Sequelize } = require('sequelize');
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

//Teste de conexão - Versão domuentação NPM - Sequelize
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


//Teste de conexão - Versão prof. Victor Lima
/*sequelize.authenticate().then(function () {
    console.log('Connection has been established successfully.')    
}).catch (function(erro) {
    console.error('Unable to connect to the database:', erro)
})*/

const Postagem = sequelize.define('postagens', {
    // Model attributes are defined here
    titulo: {
      type: Sequelize.STRING,

    },           
    conteudo: {
      type: Sequelize.TEXT
      // allowNull defaults to true
    }
  });
  
  // `sequelize.define` also returns the model
  console.log(Postagem === sequelize.models.Postagem); // true

Postagem.create({titulo:'O gol debochado',
                conteudo:'O dia que o fenômeno humilhou o Santos'})
//Postagem.sync({ force: true }) 

//Método para criar tabela de usuário
const Usuario = sequelize.define('usuario', {
    // Model attributes are defined here
    nome: {
      type: Sequelize.STRING,

    },           
    sobrenome: {
      type: Sequelize.STRING
      
    },
    idade: {
      type: Sequelize.INTEGER,
  
    },
    email: {
      type: Sequelize.STRING,
  
    }
  });
  
  // `sequelize.define` also returns the model
  console.log(Usuario === sequelize.models.usuario); // true
//Usuario.sync({ force: true })


//Método para criar usuário
   
Usuario.create({nome:'Ronaldo',
    sobrenome:'Nazario',
    idade:36,
    email:'fenomeno09@gmail.com'})


