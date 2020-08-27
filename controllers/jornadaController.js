const Jornada = require('../models/Jornada');


const jornadaHome = async (req,res) => {
    const avances = await Jornada.findAll();
   
        res.render('index',{
        nombrePagina : 'Jornada',
        avances
        
    })

    res.redirect('/BOL-TOTAL');
}

 
const avancePorVendedor = async (req,res,next) => {
    const avances = await Jornada.findAll();
    const avance = await Jornada.findOne({
        where: {
            zona: req.params.zona
        }
    });

if(!avance) return next()

    res.render('index', {
        nombrePagina: 'Jornada',
        avance,
        avances
    })
}

module.exports = {
    jornadaHome,
    avancePorVendedor
}