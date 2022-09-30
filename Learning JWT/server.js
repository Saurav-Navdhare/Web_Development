const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {authenticateToken} = require("./middleware/authenticateToken")
const posts = [
    {
        username: "Saurav",
        title: "Post 1"
    },
    {
        username: "Harsh",
        title: "Post 2"
    }
];

app.use(express.json());
app.get("/posts", authenticateToken, (req,res)=>{
    res.json(posts.filter(post => post.username == req.user.name));
})

app.post("/login", (req,res)=>{
    const username = req.body.username;
    const user = {name: username};

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken: accessToken});
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})