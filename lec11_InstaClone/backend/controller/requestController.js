const userModel = require("../model/userModel");
const followingModel = require("../model/followingModel");
const followerModel = require("../model/followerModel");

async function sendRequest(req, res) {
    try {
      console.log(req.body);
      let { uid, followId } = req.body;
      // isPublic
      let doc = await userModel.find({_id: followId }).exec();
      console.log(doc);
      if (doc[0].isPublic) {
        // isPublic = true
        await followingModel.create({
          uid,
          followId,
        });
        await followerModel.create({
          uid: followId,
          followerId: uid,
        });
        res.json({
          message: "Request sent and accepted !!",
        });
      } else {
        // isPublic = false
        await followingModel.create({
          uid,
          followId,
          isAccepted: false,
        });
        res.json({
          message: "Request sent and pending !!",
        });
      }
    } catch (error) {
      res.json({
        message: "Failed to send request !!",
        error,
      });
    }
};

async function acceptRequest(req , res) {
  try {
    //console.log(req.body);
    let {uid, toBeAccepted} = req.body;
    //changes in following document
    let doc = await followingModel.find({uid:toBeAccepted , followId:uid}).exec();
    console.log(doc);
    doc[0].isAccepted = true;
    await doc[0].save();
    //add in follower collection
    await followerModel.create({
      uid: uid,
      followerId: toBeAccepted,
    });
    res.json({
      message: "Request accepted !!",
    });
    
  } catch (error) {
    res.json({
      message:"Failed to accept request",
      error,
    });
    
  }
};

async function pendingRequest(req , res){
  try {
    let uid = req.params.uid;
    console.log(uid);
    let docs = await followingModel.find({isAccepted:false , followId:uid }).exec();
    console.log(docs);   
    let requests = [];

    for(let i=0 ; i<docs.length ; i++){
      let uid = docs[i].uid;
      let user = await userModel.findById(uid);
      requests.push(user);
    }
    //console.log(requests);
    if(requests.length){
      res.json({
        message:"Successfully got the follow request list!!",
        requests
      });
    }
    else{
      res.json({
        message:"You have no follow requests!"
      })
    }
  } 
  catch (error) {
    res.json({
      message:"Failed to get request list!!",
      error
    });
    
  }
};

async function deleteRequest(req , res){
  try {
    
  } 
  catch (error) {
    res.json({
      message:"Failed to delete request!!",
      error
    });
  }
};

async function cancelRequest(req , res){

};

async function deleteFollower(req , res){

};

async function deleteFollowing(req , res){
  console.log("Inside delete following");
  try {
    let uid = req.params.uid;
    let myFollowing = await getFollowingHelper(uid);
    if (myFollowing.length) {
      console.log(myFollowing);
      res.json({
        message: "Succesfully got all following !",
        myFollowing,
      });
    } else {
      res.json({
        message: "You dont have any following !",
      });
    }

  } catch (error) {
    res.json({
      message:"Couldn't delete following",
      error
    })
    
  }

};

async function getFollowingHelper(uid) {
  try {
    let following = await followingModel.find({ uid: uid, isAccepted: true }).exec();
    let myFollowing = [];
    for (let i = 0; i < following.length; i++) {
      let user = await userModel.findById(following[i].followId);
      myFollowing.push(user);
    }
    return myFollowing;
  } catch (error) {
    return error;
  }
};

async function getAllFollowing(req, res) {
  try {
    let uid = req.params.uid;
    let myFollowing = await getFollowingHelper(uid);
    if (myFollowing.length) {
      res.json({
        message: "Succesfully got all following !",
        myFollowing,
      });
    } else {
      res.json({
        message: "You dont have any following !",
      });
    }
  } catch (error) {
    res.json({
      message: "Failed to get all following",
      error,
    });
  }
};

async function getAllFollowers(req, res) {
  try {
    let uid = req.params.uid;
    let followerIds = await followerModel.find({ uid: uid });
    // console.log(followerIds);
    if (followerIds.length) {
      let myFollowers = [];
      for (let i = 0; i < followerIds.length; i++) {
        let user = await userModel.findById(followerIds[i].followerId);
        myFollowers.push(user);
      }
      res.json({
        message: "Succesfully got all Followers",
        myFollowers,
      });
    } else {
      res.json({
        message: "You dont have any follower !",
      });
    }
  } catch (error) {
    res.json({
      message: "Failed to get all followers",
      error,
    });
  }
};

async function getAllSuggestions(req, res) {
  try {
    let uid = req.params.uid;
    let myFollowing = await getFollowingHelper(uid);
    let checkList = myFollowing.map( function(user){
        return user["_id"]+"";
    });
    checkList.push(uid); 
    let suggestions = [];
    for(let i=0 ; i<myFollowing.length ; i++){
        let followingOfMyFollowings = await getFollowingHelper(myFollowing[i]["_id"]);
        for(let j=0 ; j<followingOfMyFollowings.length ; j++){
            if(!(checkList.includes(followingOfMyFollowings[j]["_id"])) &&( followingOfMyFollowings[j]["_id"]!=uid)){
                suggestions.push(followingOfMyFollowings[j]);
                checkList.push(followingOfMyFollowings[j]["_id"]+"");
            }
        }
    }

    res.json({
        message:"Succesfully got all suggestions !",
        suggestions
    });
  } catch (error) {
    res.json({
      message: "Failed to get suggestions !",
      error,
    });
  }
};






module.exports.sendRequest = sendRequest;
module.exports.acceptRequest = acceptRequest;
module.exports.pendingRequest = pendingRequest;
module.exports.deleteRequest = deleteRequest;
module.exports.cancelRequest = cancelRequest;
module.exports.deleteFollower = deleteFollower;
module.exports.deleteFollowing = deleteFollowing;
module.exports.getAllFollowing = getAllFollowing;
module.exports.getAllFollowers = getAllFollowers;
module.exports.getAllSuggestions = getAllSuggestions;