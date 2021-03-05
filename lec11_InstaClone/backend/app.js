// npm init -y
// npm i nodemon express mongoose


const express = require("express");
const userRouter = require("./router/userRouter");
const requestRouter = require("./router/requestRouter");
const postRouter = require("./router/postRouter");

const app = express();
app.use(express.static("public"));

// dumps post data into req.body
app.use(express.json());


//for all the user related functions, navigate to userRouter
//localhost:4000/api/user  post method
app.use("/api/user" , userRouter);

// for all the request related functions
app.use("/api/request" , requestRouter);

//for all the post related functions
app.use("/api/post" , postRouter);



app.listen(4000 , function(){
    console.log("app started at port 4000!!!");
})