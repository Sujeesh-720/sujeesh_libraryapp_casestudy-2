const express = require('express');
const userRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const Authordata = require('../model/Authordata');
function router(nav){
    const nav2=nav;
    userRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("userbooks",{
                nav,
                title:'Library',
                books
            });

        });

    });
    userRouter.get('/books/:id',function(req,res){
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
        userRouter.get('/authors',function(req,res){
          Authordata.find()
        .then(function(authors){
        res.render("userauthors",{
            nav,
            title:'Library',
            authors
        });

      });
      
    });
    userRouter.get('/authors/:id',function(req,res){
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
    
    

    return userRouter;
    }
    module.exports = router;