const requestRouter = require("express").Router();
const {sendRequest , acceptRequest, pendingRequest, getAllFollowing, getAllFollowers} = require("../controller/requestController");


requestRouter.route("").post(sendRequest);
requestRouter.route("/accept").post(acceptRequest);
requestRouter.route("/:uid").get(pendingRequest);
requestRouter.route("/following/:uid").get(getAllFollowing);
requestRouter.route("/follower/:uid").get(getAllFollowers);



module.exports = requestRouter;