const { Sequelize } = require('sequelize');
require('dotenv').config({path:'variables.env'});


const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
  host: process.env.BD_HOST, //'127.0.0.1'
  dialect:  'mysql',
  port: process.env.BD_PORT,
  define: {
      timestamps: false
  }
});


module.exports = db;