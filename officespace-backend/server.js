//npm required
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//setting up npm
const app = express();
const port = 3000;

app.get('/', (rer, res)=>{
    res.sendFile(path.join(_dirname, 'public', ''))
})


app.use(express.static('./public'));
app.use(bodyParser.json());
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



