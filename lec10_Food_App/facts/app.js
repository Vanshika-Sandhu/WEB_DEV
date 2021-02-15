const express = require("express") ;
const fs = require("fs");
// nodejs => code se server build hota tha  =>  but express nodejs ka code easy way me krta hai 

const app = express() ;
const usersDb = require("./Model/usersDB.json") ;

//app.get method , route = localhost:3000/home , function(request ,response)

//app.get("/home" , function(req ,res ){
    // req.body => client se request
   // res.send("<h1>Welcome to home page !!</h1>");
//})

//adds data in req.body
app.use(express.json());

//users
function createUser(req ,res){
    let userData = req.body ;
    if(userData.name){
        usersDb.push(userData);
        fs.writeFileSync("./Model/usersDB.json" ,JSON.stringify(usersDb));
        res.status(200).json({
            message: "User Created Successfully!!"
        })
    }
    else{
        res.status(204).json({
            message: "User data is empty! Can't create user :("
        })
    }
}

app.post("/api/user" , createUser);

app.listen(3000 , function(){
    console.log("App has started at port 3000!!");
}) ;