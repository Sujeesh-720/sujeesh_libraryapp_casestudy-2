const express = require("express");
const authorsRouter = express.Router();
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
    const nav2=nav;
    
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });

      })

    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
        res.render('author',{
            nav2,
            title:'Library',
            author
        });

      })

    });
    authorsRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Authordata.remove({_id:id})
        .then(function(){
            res.redirect("/authors");
        });

    });
    authorsRouter.get('/update/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("addAuthor",{
                nav,
                title:'Update',
                author,
                link:"/authors/update/up/"+id

            });
        });

    });
    authorsRouter.post('/update/up/:id',img.single('image'),function(req,res){
        const id = req.params.id;
        var item = {
            name: req.body.name,
            knownas: req.body.knownas,
            birthplace: req.body.birthplace,
            image: imagename
    
        }
        Authordata.updateOne({_id:id},item)
        .then(function(){
            res.redirect("/authors")
        });

    });


    return authorsRouter;
}


module.exports = router;