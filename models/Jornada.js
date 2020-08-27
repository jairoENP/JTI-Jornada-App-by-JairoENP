const Sequelize = require('sequelize');
const db = require('../config/db');



const Jornada = db.define('jornada', {
    region: Sequelize.STRING,
    zona: Sequelize.STRING,
    vendedor: Sequelize.STRING, 
    muCigarrillos: Sequelize.FLOAT, 
    objCigarrillos: Sequelize.FLOAT, 
    avanceCigarrillos: Sequelize.FLOAT,
    muCamel: Sequelize.FLOAT, 
    objCamel: Sequelize.FLOAT, 
    avanceCamel: Sequelize.FLOAT,
    muLD: Sequelize.FLOAT, 
    objLD: Sequelize.FLOAT, 
    avanceLD: Sequelize.FLOAT ,
    muMontecarlo: Sequelize.FLOAT, 
    objMontecarlo: Sequelize.FLOAT, 
    avanceMontecarlo: Sequelize.FLOAT,
    cantidadDistribucion: Sequelize.INTEGER, 
    objDistribucion: Sequelize.INTEGER, 
    avanceDistribucion: Sequelize.FLOAT,
    cantidadDistribucionLD: Sequelize.INTEGER, 
    objDistribucionLD: Sequelize.INTEGER, 
    avanceDistribucionLD: Sequelize.FLOAT ,
    colorCigarrillos: Sequelize.INTEGER,
    colorCamel: Sequelize.INTEGER,
    colorLD: Sequelize.INTEGER,
    colorMontecarlo: Sequelize.INTEGER,
    colorDistribucion: Sequelize.INTEGER,
    colorDistribucionLD: Sequelize.INTEGER

})

module.exports = Jornada;