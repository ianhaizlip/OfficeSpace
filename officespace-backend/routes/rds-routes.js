const User = require('../models/user');
const dynamoose = require('dynamoose');

module.exports = (rds) => {
    //Route to get an individual user
    app.get('/api/user', (req, res) => {
        User.getOne({username: req.body.username}, (err,user)=>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json(user);
            }
        });
        res.end('get request received /api/persona')
    });

    //make a new user
    app.post('/api/user', (req, res) => {

        (new User(req.body).save((err, user) => {
                if(err){
                    res.status(500).json(err);
                }

                else{
                    res.status(201).json(user);
                }

            }
        ));
    });

    //change the info of a user
    app.put('/api/personas/:id', (req, res) => {

        User.update({_id: req.params.id}, req.body, {new:true}, (err,user)=>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json(user);
            }
        });

        console.log(req.params);
        console.log(req.body);
    });
    //delete a user from the database
    app.delete('/api/persona/:id', (req, res) => {
        User.delete({_id: req.params.id}, (err)=>{

            if(err){
                res.status(500).json(err);
            }
            else{
                res.status(201).json({});
            }
        });
        console.log(req.params);
    });
};