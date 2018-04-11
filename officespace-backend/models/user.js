const mongoose = require('mongoose');

module.exports = mongoose.model('Persona', new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            rangeKey:true
        },
        account: {
            type: String,
            required: true,

        },
        region: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,

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



