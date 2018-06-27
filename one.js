var mongoose=require('mongoose');
var Scheme=mongoose.Schema;
console.log("Connecting.....")
mongoose.connect('mongodb://localhost:27017/raj')
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
var colle=mongoose.model("rama",acc,'rama')
module.exports=colle;