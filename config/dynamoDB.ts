const AWS = require('./aws');

class DynamoClient {
  static getClient() {
    return new AWS.DynamoDB.DocumentClient();
  }
}
export { DynamoClient }