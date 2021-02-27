const requestRouter = require("express").Router();
const {sendRequest , acceptRequest, pendingRequest, getAllFollowing, getAllFollowers, getAllSuggestions} = require("../controller/requestController");


requestRouter.route("").post(sendRequest);
requestRouter.route("/accept").post(acceptRequest);
requestRouter.route("/:uid").get(pendingRequest);
requestRouter.route("/following/:uid").get(getAllFollowing);
requestRouter.route("/follower/:uid").get(getAllFollowers);
requestRouter.route("/suggestions/:uid").get(getAllSuggestions);

module.exports = requestRouter;