const { Sequelize } = require('sequelize');

// Conexão MySQL
    const sequelize = new Sequelize('postapp', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql'
    });

//Exportando conexão e configuações de banco de dados    
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}