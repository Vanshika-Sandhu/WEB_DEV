const usersDB = require("../Model/usersDB.json");
const fs = require("fs");
const { get } = require("../Router/userRouter");

function createUser(req , res){
    let userData = req.body ;
    if(userData.name){
        usersDb.push(userData);
        fs.writeFileSync("./Model/usersDB.json" ,JSON.stringify(usersDb));
        res.status(200).json({
            message: "User Created Successfully!!"
        })
    }
    else{
        res.status(200).json({
            message: "User data is empty! Can't create user :("
        })
    }
}

function getAllUsers(req , res){
    res.json({
        message:"Successfully got all users",
        usersDB
    })
}

function getUserById(req , res){

}

function updateUsersById(req , res){

}

function deleteUserById(req , res){

}

module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.updateUsersById = updateUsersById;
module.exports.getUserById = getUserById;
module.exports.deleteUserById = deleteUserById;

