const express = require('express');
const accessRouter = express.Router();
function router(nav){
accessRouter.get('/',function(req,res){
    res.render('addAuthor',{
        nav,
        title: 'Library',

    })
})
return accessRouter;
}
module.exports = router;