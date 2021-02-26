// npm init -y
// npm i nodemon express mongoose


const express = require("express");
const userRouter = require("./router/userRouter");
const requestRouter = require("./router/requestRouter");

const app = express();

// dumps post data into req.body
app.use(express.json());


//for all the user related functions, navigate to userRouter
//localhost:3000/api/user  post method
app.use("/api/user" , userRouter);


// for all the post related functions
app.use("/api/request" , requestRouter);



app.listen(3000 , function(){
    console.log("app started at port 3000!!!");
})