
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