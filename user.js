var express=require('express')
var app=express()
var path=require("path");
var s=require('./router.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname))
app.use('/proj1',express.static(path.join(__dirname,'proj1')))
app.use('/',s);
app.listen(4000);

