var mongoose=require('mongoose');
var Scheme=mongoose.Schema;
console.log("Connecting.....")
mongoose.connect('mongodb://localhost:27017/kogi')
var acc=new Scheme({
"firstname":String,
"lastname":String,
"gender":String,
"department":String,
"course":String
})
mongoose.connection.once("open",function(){
console.log("db connected")
})
var colle=mongoose.model("devv",acc,'devv')
module.exports=colle;