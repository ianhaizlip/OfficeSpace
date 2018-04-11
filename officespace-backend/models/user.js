const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        account: {
            type: String,
            trim: true,
            required: true,
        },
        region: {
            type: String,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true
        },
        bucket: {
            type: String,
            trim: true
        },
        imgUrl: {
            type: String,
            default: ''
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now
        },
    }
));



