const AWS = require('./aws');

const dynamodb = new AWS.DynamoDB();

module.exports = dynamodb;