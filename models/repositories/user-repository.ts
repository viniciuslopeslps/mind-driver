
import { DynamoClient } from '../../config/dynamoDB'
import { User } from '../entities/user-entity';
import moment = require('moment');


class UserRepository {
  static TABLE_NAME: String = 'User';

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

  updateUser(oldUser: User, newUser: User){
    const params = {
      TableName: UserRepository.TABLE_NAME,
      Key: {
        "email": oldUser.email,
      },
      UpdateExpression: "set #password=:p, #updatedAt=:u",
      ExpressionAttributeValues: {
        ":p": newUser.password,
        ":u": moment(new Date()).format('DD/MM/yyyy'),
      },
      ExpressionAttributeNames: {
        "#password": "password",
        "#updatedAt": "updatedAt",
      },
      ReturnValues: "UPDATED_NEW"
    };

    let client = DynamoClient.getClient();

    return new Promise((resolve, reject) => {
      client.update(params, (err, data) => {
        if (err) {
          console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
          reject(err);
        } else {
          console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
          resolve(data.Attributes);
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