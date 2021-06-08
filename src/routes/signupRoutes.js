const express = require('express');
const signupRouter = express.Router();
const usersignupdata = require('../model/usersignupdata');
function router(nav){
signupRouter.get('/',function(req,res){
    res.render('signup',{
        nav,
        title: 'Library',

    });
});
signupRouter.post("/adddata",function(req,res){
    var item = {
     name: req.body.name,
     phoneno: req.body.phoneno,
     emailid: req.body.emailid,
     password: req.body.password
    }
     
    var sign = usersignupdata(item);
    sign.save();
    res.redirect('/login');
   
});
return signupRouter;
}
module.exports = router;