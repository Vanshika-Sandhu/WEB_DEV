const requestRouter = require("express").Router();
const {sendRequest , acceptRequest, pendingRequest} = require("../controller/requestController");


requestRouter.route("").post(sendRequest);
requestRouter.route("/accept").post(acceptRequest);
requestRouter.route("/:uid").get(pendingRequest);


module.exports = requestRouter;