const express = require('express');
const accessRouter = express.Router();
const multer = require('multer');
var imagename=""
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        var dir = "public/images";
      callback(null, dir);
    },
  
    filename: function (req, file, callback) {
      callback(null, file.originalname);
      imagename=file.originalname;
    }
  });
  var img = multer({storage:storage});
const Authordata = require('../model/Authordata');
function router(nav){
    var author={
        name:"",
        knownas:"",
        birthplace:"",
        image:""
        
    }
accessRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title: 'Library',
            author,
            link:"/access/add"
    
        })
    })
accessRouter.post('/add',img.single('image'),function(req,res){
    var item = {
        name: req.body.name,
        knownas: req.body.knownas,
        birthplace: req.body.birthplace,
        image: imagename

    }
    var author = Authordata(item);
    author.save();//saving to database
    res.redirect('/authors');
   

});
return accessRouter;
}
module.exports = router;