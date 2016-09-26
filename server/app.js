var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var port = process.env.PORT || 4000;
app.use(bodyParser.json());
var mongoose = require('mongoose');

//routers
var superRouter = require('../router/superRouter');

//use routers
app.use('/hero', superRouter);

mongoose.connect("mongodb://localhost:27017/HeroTable");


app.listen(port, function(){
  console.log('listening on', port);
});
app.get("/", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.use(express.static('public'));
