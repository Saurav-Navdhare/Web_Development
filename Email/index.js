const express = require("express");
const app = express();
require("dotenv").config();
const nodemailer = require("nodemailer");
const {google} = require("googleapis");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const FROM = process.env.FROM;
const TO = process.env.TO;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

app.get("/", async (req, res)=>{
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: "gmail",
            user: FROM,
            auth: {
                type: "OAuth2",
                user: FROM,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            },
            tls: {
                rejectUnauthorized: false
                
            }
        });
        const mailOptions = {
            from: `Saurav's Backend Server <${FROM}>`,
            to: TO,
            subject: "HELLO",
            html: "<h1>Hello from NodeJS</h1>",
            text: "Hello from NodeJS"
        }
        const result = await transport.sendMail(mailOptions);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

const Port = process.env.PORT || 3000;
app.listen(Port, (err)=>{
    if(err) throw err;
    console.log(`Server is running on port ${Port}`);
})