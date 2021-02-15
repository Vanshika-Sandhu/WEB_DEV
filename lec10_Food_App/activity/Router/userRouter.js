const express = require("express");
const { createUser, getAllUsers } = require("../Controller/userController");
const userRouter = express.Router();

userRouter.route("").post(createUser).get(getAllUsers);


module.exports = userRouter;