require('dotenv').config();
let express    = require('express');        // call express
let app        = express();                 // define our app using express

const calc = require('./routes/calc');
var router = express.Router();   
app.use('/', router);
let port = process.env.PORT || 8082;
app.use('/calc', calc);
app.listen(port);
console.log('racks-api now running on  ' + port);