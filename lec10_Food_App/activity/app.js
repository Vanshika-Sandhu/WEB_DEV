const express = require("express");

// nodejs => code se server build hota tha  =>  but express nodejs ka code easy way me krta hai 
const app = express() ;
const userRouter = require("./Router/userRouter");

//app.get method , route = localhost:3000/home , function(request ,response)

//app.get("/home" , function(req ,res ){
    // req.body => client se request
   // res.send("<h1>Welcome to home page !!</h1>");
//})



//adds data in req.body
app.use(express.json());



// localhost:3000/api/user
app.use("/api/user" , userRouter );




app.listen(3000 , function(){
    console.log("App has started at port 3000!!");
}) ;