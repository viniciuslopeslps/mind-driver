
import { DynamoClient } from '../../config/dynamoDB'
import { Content } from '../entities/content-entity'
import moment = require('moment');

class ContentRepository {
  static TABLE_NAME: String = 'Content';

  createContent(context: Content) {
    const params = {
      TableName: ContentRepository.TABLE_NAME,
      Item: context
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

  updateContent(context: Content) {
    const params = {
      TableName: ContentRepository.TABLE_NAME,
      Key: {
        "title": context.title
      },
      UpdateExpression: "set #type=:t, #description=:d, #imageUrl=:i, #updatedAt=:u, #path=:p",
      ExpressionAttributeValues: {
        ":t": context.type,
        ":d": context.description,
        ":i": context.imageUrl,
        ":u": moment(new Date()).format('DD/MM/yyyy'),
        ":p": context.path,
      },
      ExpressionAttributeNames: {
        "#type": "type",
        "#description": "description",
        "#imageUrl": "imageUrl",
        "#updatedAt": "updatedAt",
        "#path": "path",
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

  deleteContent(title: String) {
    var params = {
      TableName: ContentRepository.TABLE_NAME,
      Key: {
        "title": title
      }
    };
    let client = DynamoClient.getClient();
    return new Promise((resolve, reject) => {
      client.delete(params, (err, data) => {
        if (err) {
          console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
          reject(err);
        } else {
          console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
          resolve(data);
        }
      });
    });
  }
}

export { ContentRepository }