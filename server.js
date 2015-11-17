var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

var mongojs = require('mongojs');

var config = require('./config');
var UserCtrl = require('./controllers/userCtrl');
var ProfileCtrl = require('./controllers/profileCtrl');


var db = mongojs('library');
var Book = db.collection('books');

var app = express();

app.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));

app.post('/api/login', UserCtrl.login);

app.get('/api/profiles', ProfileCtrl.getUserFriends);

app.post('/api/books', function (req, res) {
    Book.insert(req.body, function (err, result) {
        if (err) res.sent(err);
        else res.json(result);
    });
});

app.use(express.static(__dirname + '/public'));



app.listen(3000, function () {
    console.log('Listening on port 3000');
});