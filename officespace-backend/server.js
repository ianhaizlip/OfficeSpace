//npm required
const express = require('express');
const bodyParser = require('body-parser');
const dynamoose = require('dynamoose');
const path = require('path');

//configuration
const app = express();
const port = 3000;

app.get('/list', (rer, res)=>{
    res.sendFile(path.join(_dirname, 'public', ''))
})

dynamoose.AWS.config.update({
    accessKeyId: 'AKID',
    secretAccessKey: 'SECRET',
    region: 'us-east-1'
});

app.use(express.static('./public'));
app.use(bodyParser.json());
require('./routes/api-routes.js')(app);

//---------------------------------------------------------------------
// TODO: Change to out site
//-------------------------------------------------------------------
dynamoose.connect('mongodb://localhost/persona').then(()=>
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
//---------------------------------------------------------------