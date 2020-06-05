
import { DynamoClient } from '../../config/dynamoDB'
import { User } from '../entities/user-entity';


class UserRepository {
  static TABLE_NAME: String = 'User';

  authenticate(email: String, password: String) {

    const params = {
      TableName: UserRepository.TABLE_NAME,
      KeyConditionExpression: "#email = :email and #password = :password",
      ExpressionAttributeNames: {
        "#email": "email",
        "#password": "password"
      },
      ExpressionAttributeValues: {
        ":email": email,
        ":password": password
      }
    };
    let client = DynamoClient.getClient();

    return new Promise<User>((resolve, reject) => {
      client.query(params, function (err, data) {
        if (err) {
          console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
          reject(err);
        } else {
          console.log("Query succeeded. ");
          resolve(data.Items[0]);
        }
      });
    });
  }

  createUser(user: User) {
    const params = {
      TableName: UserRepository.TABLE_NAME,
      Item: user
    }

    let client = DynamoClient.getClient();

    return new Promise((resolve, reject) => {
      client.put(params, (err, data) => {
        if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
          reject(err);
        } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
          resolve(data);
        }
      });
    });
  }
  findByEmail(email: String) {

    const params = {
      TableName: UserRepository.TABLE_NAME,
      KeyConditionExpression: "#email = :email",
      ExpressionAttributeNames: {
        "#email": "email",
      },
      ExpressionAttributeValues: {
        ":email": email,
      }
    };
    let client = DynamoClient.getClient();

    return new Promise<User>((resolve, reject) => {
      client.query(params, function (err, data) {
        if (err) {
          console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
          reject(err);
        } else {
          console.log("Query succeeded. ");
          resolve(data.Items[0]);
        }
      });
    });
  }
}


export { UserRepository }