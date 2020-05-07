require('dotenv').config();
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');

const calc = require('./routes/calc');
var router = express.Router();   
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);
let port = process.env.PORT || 8082;
app.use('/calc', calc);

app.listen(port);
console.log('calculator api now running on  ' + port);