var mongoose=require('mongoose')
var Schema=mongoose.Schema;
var SchemaTypes=mongoose.SchemaTypes;
var express =require('express')
var path =require('path')
var router=express.Router()
var coll=require('./one.js')


router.get('/',function(req,res)
{
	res.sendFile(path.join(__dirname,'/proj1'))
})
router.get('/listsree',function(req,res){
	coll.find({},function(err,data){
		res.json({data})
	})
})

router.post('/createuser',function(req,res){
	var user=new coll({"firstname":req.body.firstname,"lastname":req.body.lastname,"gender":req.body.gender,"department":req.body.department,"course":req.body.course})
	console.log(user)
	user.save(function(err,data)
	{
		console.log(data);
		res.json({data})
	})
})
	
router.get('/list',function(req,res){
	coll.find({},function(err,data){
		res.json({data})
	})
})
module.exports=router;