let {mongoose} = require("./db");


let userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    } ,
    username:{
        type:String,
        required:true,
        unique:true
    },
    bio:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isPublic:{
        type:Boolean,
        default: true
    },
    profilePic:{
        type:String,
        default:"../../frontend/insta/public/default.jpg"
    }
});

const userModel = mongoose.model('user' , userSchema);

module.exports = userModel;