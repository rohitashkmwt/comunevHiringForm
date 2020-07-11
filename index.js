let express = require('express');
var cors = require('cors');
const path = require('path');
let bodyParser = require('body-parser');
const router = express.Router();
let mongoose = require('mongoose');

let app = express();
app.use(cors())
let apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });

var db = mongoose.connection;

if (!db) {
    console.log('Error connecting DB.');
} else {
    console.log("DB Connected successfully!");
}

var port = process.env.port || 8080;
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
    //__dirname : It will resolve to your project folder.
});
//app.get('/', (req, res) => res.send('Hello, it\' running with express.!!'));


app.use('/api', apiRoutes);

app.listen(port, function() {
    console.log("Running node on port" + port + "!!");
});