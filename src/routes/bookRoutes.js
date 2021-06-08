const express = require("express");
const booksRouter = express.Router();
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

const Bookdata = require('../model/Bookdata');
function router(nav){
    
    const nav2=nav;
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
            });

        })
        
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
             nav2,
                title:'Library',
                book
            });
        })

        
    });
    booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Bookdata.remove({_id:id})
        .then(function(){
            res.redirect("/books");
            
        });
    });
    booksRouter.get('/update/:id',function(req,res){
        const id= req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("addBook",{
                nav,
                title:'Update',
                book,
                link:"/books/update/up/"+id
            });
        });
    });
    booksRouter.post('/update/up/:id',img.single('image'),function(req,res){
        const id= req.params.id;
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: imagename
    
        }
      Bookdata.updateOne({_id:id},item)
       .then(function(){
           res.redirect("/books");
       });
    });

    return booksRouter;
}


module.exports = router;