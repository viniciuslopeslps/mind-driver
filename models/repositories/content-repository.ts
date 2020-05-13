
import { DynamoClient } from '../../config/dynamoDB'

import { Content } from '../entities/content-entity'


class ContentRepository {

  createContext(context: Content) {
    const params = {
      TableName: 'Content',
      Item: context
    }
    let client =  DynamoClient.getClient();
    client.put(params, (err: any, data: any) => {
      if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
      }
    });
  }
}

export { ContentRepository }