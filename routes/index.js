const express = require('express');
const router = express.Router();
const {jornadaHome,avancePorVendedor} = require('../controllers/jornadaController')


router.get('/',jornadaHome)
router.get('/:zona',avancePorVendedor);



 
module.exports =  router; 


