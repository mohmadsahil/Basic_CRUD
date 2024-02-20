const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Posts = mongoose.model("posts",postSchema)
module.exports = Posts;