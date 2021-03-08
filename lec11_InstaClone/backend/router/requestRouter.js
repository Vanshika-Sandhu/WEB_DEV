const requestRouter = require("express").Router();
const {sendRequest , acceptRequest, pendingRequest, getAllFollowing, getAllFollowers, getAllSuggestions, deleteFollowing, deleteRequest, deleteFollower} = require("../controller/requestController");


requestRouter.route("").post(sendRequest);
requestRouter.route("/accept").post(acceptRequest);
requestRouter.route("/delete/:followId/:uid").delete(deleteRequest)
requestRouter.route("/:uid").get(pendingRequest);
requestRouter.route("/following/:uid").get(getAllFollowing);
requestRouter.route("/follower/:uid").get(getAllFollowers);
requestRouter.route("/suggestions/:uid").get(getAllSuggestions);
requestRouter.route("/delete/following/:uid/:followingId").delete(deleteFollowing);
requestRouter.route("/delete/follower/:uid/:followerId").delete(deleteFollower);

module.exports = requestRouter;