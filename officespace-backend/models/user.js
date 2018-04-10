const dynamoose = require('dynamoose');

module.exports = mongoose.model('User', new dynamoose.Schema(
    {
        age: {type:Number},
        dayInThelifeOf: {type: String},
        imageUrl: {type: String},
        name:{type: String, default: 'John Doe'}
    }
));