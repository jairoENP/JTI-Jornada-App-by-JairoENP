const express = require('express');
const app = express();
const routes = require('./routes/index')
const port = process.env.port || 3000;
const path = require('path');
const bodyParser = require('body-parser');
//const expressValidator = require('express-validator');


const helpers = require('./helpers')

const db = require('./config/db'); 

require('./models/Jornada')

db.sync()
    .then(() => console.log('conectado al servidor'))


app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views',path.join(__dirname, './views'));
 
app.use((req,res,next) => {
    res.locals.vardump = helpers.vardump;
    next();
})

app.use(bodyParser.urlencoded({extended:true}));

app.use('/',routes); 

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
}) 