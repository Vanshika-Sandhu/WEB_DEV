const requestRouter = require("express").Router();
const {sendRequest , acceptRequest} = require("../controller/requestController");


requestRouter.route("").post(sendRequest);
requestRouter.route("/accept").post(acceptRequest);


module.exports = requestRouter;