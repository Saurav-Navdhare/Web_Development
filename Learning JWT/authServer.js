const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();
app.use(express.json());

let refreshTokens = []

app.post("/token", (req,res)=>{
    const refreshToken = req.body.token;
    if(refreshToken == null){
        return res.sendStatus(401);
    }
    if(!refreshTokens.includes(refreshToken)){
        return res.sendStatus(403);
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,user)=>{
        if(err){
            res.sendStatus(403);
        }
        const accessToken = generateAccessToken({name:user.name })
        res.json({accessToken:accessToken})
    })
})

app.post("/login", (req,res)=>{
    const username = req.body.username;
    const user = {name: username};

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({accessToken: accessToken, refreshToken: refreshToken});
})

app.delete("/logout", (req,res)=>{
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter(token => token!==refreshToken)
    res.sendStatus(204);
})

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15s"}); //token expires in 15 min then we'll generate a REFRESH token
}


const PORT = 4000;
app.listen(PORT, ()=>{
    console.log(`authServer is running on port ${PORT}`);
})