var express=require('express');
var app=express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/img'));
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set('views', 'views');
const sendfile=require("./routes/sendfile");
app.use(sendfile);
app.listen('3000',()=>{
	console.log('connected to server');
})