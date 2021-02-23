const userModel = require("../model/userModel");

function createUser(req , res){
  //console.log("Inside createUser function!!!");
  userModel.create({
    name: "Michael Scott",
    username:"call_me_mike",
    bio:"THAT'S WHAT SHE SAID!",
    email:"littlekidlover@gmail.com",
    password:"feelingHOTHOTHOT"
  })
  .then(function(createdUser){
    res.json({
        createdUser
    });
  });
}

module.exports.createUser = createUser;
