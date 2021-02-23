const { Mongoose, mongo } = require("mongoose");

const {mongoose} = require("../model/db");

function createUser(req , res){
    console.log("Inside createUser");
}

module.exports.createUser = createUser;
