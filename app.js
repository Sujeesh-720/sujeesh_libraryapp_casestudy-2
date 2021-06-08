const express = require("express");
const app = new express();
const port = process.env.PORT || 5000;

const nav = [
    {
        link:'/signup',name:'Signup'
    },
    {
        link:'/login',name:'Login'
    }
   
];
   const nav1=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/access',name:'Add Author'
    },
        {
        link:'/',name:'Logout'
    }
];
    const nav2=[
        {
            link:'/user',name:'Books'
        },
        {
            link:'/user/authors',name:'Authors'
        },
        {
            link:'/',name:'Logout'
        }

    ];

const booksRouter = require('./src/routes/bookRoutes')(nav1)
const adminRouter = require('./src/routes/adminRoutes')(nav1)
const authorsRouter = require('./src/routes/authorRoutes')(nav1)
const accessRouter = require('./src/routes/accessRoutes')(nav1)
const signupRouter = require('./src/routes/signupRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)
const userRouter = require('./src/routes/userRoutes')(nav2)


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/admin',adminRouter);
app.use('/authors',authorsRouter);
app.use('/access',accessRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/user',userRouter);

app.post("/images",(req,res)=>{
    img(req.res,function(err){
    
    if(err){
        return res.send("Something gone wrong");
    }
    res.send("upload complete");
    });
});



app.get('/',function(req,res){
    res.render("index",
    {  
        nav,
       title: 'Library',
       img:"aaa.jpg"
    });
});

app.listen(port,()=>{console.log("Server Ready at" + port)});