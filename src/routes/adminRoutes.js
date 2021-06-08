const express = require('express');
const adminRouter = express.Router();
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
    var book={
        title:"",
        author:"",
        genre:"",
        image:""
    }
adminRouter.get('/',function(req,res){
    res.render('addBook',{
        nav,
        title: 'Library',
        book,
        link:"/admin/add"

    })
})
adminRouter.post('/add',img.single('image'),function(req,res){
    var item = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        image: imagename

    }
    var book = Bookdata(item);
    book.save();//saving to database
    res.redirect('/books');
   

});
return adminRouter;
}
module.exports = router;