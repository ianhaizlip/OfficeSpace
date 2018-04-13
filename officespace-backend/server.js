//npm required
const AWS = require('aws-sdk');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const path = require("path");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

//setting up npm
const app = express();
const port = 3000;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(session({
    secret: process.env.SESSIONSECRET || "Coding is fun!",
    resave: false,
    saveUninitialized: true
}));

function userSetup(req, res, next) {
    if (!req.session.user) {
        req.session.user = {
            id: null,
            name: '',
            username: '',
            email: '',
            profilePic: null,
            loggedIn: false,
            isAdmin: false
        }
    }
    next()
}

app.use(userSetup);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./routes/rds-routes.js')(app);


mongoose.connect('mongodb://localhost/users').then(()=>{
    console.log('connected to mongodb');
    app.listen(port, (err)=>{
        if(err){
            console.log('server.js issue, server isnt listening');
        }
        else{
            console.log('server lisenting on port: ', port);
        }
    });
}, (err)=>{
    console.log('error occured connecting to server: ', err);
});



