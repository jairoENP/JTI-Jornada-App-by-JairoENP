const express = require('express');
const app = express();
const routes = require('./routes/index')
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config({path:'variables.env'});

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;


const helpers = require('./helpers')

const db = require('./config/db'); 

require('./models/Jornada')

db.sync()
    .then(() => console.log('conectado al servidor'))
    .catch(error => console.log(error));


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views',path.join(__dirname, './views'));
 
app.use((req,res,next) => {
    res.locals.vardump = helpers.vardump;
    next();
})

app.use(bodyParser.urlencoded({extended:true}));

app.use('/',routes); 

app.listen(port, host , () => {
    console.log(`Escuchando puerto ${port}`);
}) 