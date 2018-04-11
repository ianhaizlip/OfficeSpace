const User = require('../models/user');

module.exports = (app) => {
    app.get('/api/users', (req, res) => {
        User.find({}, (err,users)=>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json(users);
            }
        });
        res.end('get request received /api/users')
    });
    app.get('/api/users/:id', (req, res) => {
        User.findOne({ '_id': req.params.id }, (err,user)=>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json(persona);
            }
        });
        res.end('get request received /api/user/:id')
    });
    app.post('/api/users', (req, res) => {
        (new User(req.body).save((err, user) => {
                if(err){
                    res.status(500).json(err);
                }

                else{
                    res.status(201).json(user);
                }

            }
        ));
        //console.log(req.params);
        //res.end('post request received /api/persona')
    });
    app.put('/api/users/:id', (req, res) => {

        const updateObject = Object.assign({updatedAt: new Date()}, req.body);
        User.findOneAndUpdate({_id: req.params.id}, updateObject, {new:true}, (err,user)=>{
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
    app.delete('/api/persona', (req, res) => {

        User.deleteOne({_id: req.params.id}, (err)=>{
            if(err){
                res.status(500).json(err);
            }

            else{
                res.status(201).json({});
            }
        });
        console.log(req.params);
        //res.end('delete request received /api/persona:id')
    });
};