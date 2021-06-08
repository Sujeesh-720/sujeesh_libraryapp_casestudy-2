const express = require('express');
const loginRouter = express.Router();
const usersignupdata = require('../model/usersignupdata');

function router(nav){
loginRouter.get('/',function(req,res){
    res.render('login',{
        nav,
        title: 'Library',

    })
});


loginRouter.post('/checkdata', async(req,res)=>{
    try {
        const email = req.body.emailid;
        const password = req.body.password;
       const useremail = await usersignupdata.findOne({emailid:email});
       if(useremail.password==password){
           res.status(201).redirect('/user');
       }else{
           res.send("Password is incorrect");
       }
        

    } catch (error) {
        res.status(400).send("Email is incorrect")
    }
})



return loginRouter;
}
module.exports = router;