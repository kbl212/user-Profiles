var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config.js'); //might need to remove '.js'
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');


var app = express();

var corsOptions = {
    origin: 'http://localhost:3000'
};


app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(session({
    
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
    
    
    }));

app.use(express.static(__dirname + '/public'));     //__dirname could be wrong?



app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getCurrentUser);

         











app.listen(3000, function() {
    
    console.log('listening on port 3000');
    
});