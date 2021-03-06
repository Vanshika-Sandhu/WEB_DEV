const postModel = require("../model/postModel");

async function createPost(req , res){
    try {
        let postObject = req.body;
        if(req.file){
            let postPicPath = req.file.destination.substring(6) + "/" + req.file.filename;
            postObject.postImage = postPicPath;
        }        
        console.log(postObject);
        let postCreated = await postModel.create(postObject);
        res.json({
            message:"Post created successfully!!",
            postCreated
        });
    } 
    catch (error) {
        res.json({
            message:"Failed to create a post!",
            error
        });
    }
};

async function getAllPosts(req , res){
    try {
        let allPosts = await postModel.find();
        res.json({
            message:"Successfully got all posts",
            allPosts
        })
    } 
    catch (error) {
        res.json({
            messae:"Failed to get all posts",
            error
        });
    }
};

async function getMyPosts(req, res){
    try {
        let uid = req.params.uid;
        let myposts = await postModel.find({uid:uid}).exec();
        res.json({
            message:"Successfully got all posts",
            myposts
        });
    } 
    catch (error) {
        res.json({
            message:"Failed to get your posts",
            error
        })
        
    }
};


module.exports.getMyPosts = getMyPosts;
module.exports.getAllPosts = getAllPosts;
module.exports.createPost = createPost;