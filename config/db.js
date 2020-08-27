const { Sequelize } = require('sequelize');



const db = new Sequelize('pruebas', 'sa', 'Icui4cu*', {
  host: 'localhost', //127.0.0.1
  dialect:  'mssql',
  //port: '3306',
  //operatorsAliases: false,
  define: {
      timestamps: false
  }
});


module.exports = db;