const dynamoose = require('dynamoose');

module.exports = dynamoose.model('User', new dynamoose.Schema(
    {
        userId:{
            type: String,
            hashKey: true
        },
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
        email: {
            type: String,
            required: true,

        },
        imgUrl: {
            type: String,
            default: ''
        }
    },
    {
        timestamps: {
            createdAt: 'creationDate',
            updatedAt: 'lastUpdateDate'
        }
    }
));