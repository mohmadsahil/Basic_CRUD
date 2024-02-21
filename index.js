const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const Posts = require("./postSchema.js")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))


// ***********MONGODB CONNECTION**********


mongoose.connect("mongodb://127.0.0.1:27017/Trial")
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log("No Connection");
})



// ***********API***************


app.get("/",(req,res)=>{
    return res.redirect('index.html')
})

app.post("/post",async(req,res)=>{
    const {name, message} = req.body
    
    try {
        const  data = new Posts({name,message})
        const savedPost = await data.save()
    
        return res.redirect("index.html")
    } catch (error) {
            res.send("Error hai kuch")
    }
})

app.get("/allPost",async(req,res)=>{
    try {
        const  data =await Posts.find({});
    
        return res.send(data)
    } catch (error) {
            res.send("Error hai kuch")
    }
})
app.listen(8080,()=>{
    console.log("Listning on 8080");
})
