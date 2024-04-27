const express = require("express");

const app = express();

let PORT = 5000;

const sendMail = require("./SendMail");

app.get( "/" , (req, res) => {
    res.send("I am Server");
});

app.get( '/sendemail', sendMail);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("I am live in  port no 5000");
        })
    } catch (error) {
        
    }
} 

start();