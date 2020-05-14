import { ContentRequest } from '../controllers/request/content-request'
import { Content } from '../models/entities/content-entity'
import { ContentRepository } from '../models/repositories/content-repository'


class ContentService {
  async createContext(request: ContentRequest) {

    const content = new Content(request)
    let repository = new ContentRepository();
    const response = await repository.createContent(content);
    console.log(`Create context response: ${JSON.stringify(response)}`)
    return response;
  }

  async updateContext(request: ContentRequest) {
    const content = new Content(request)
    let repository = new ContentRepository();
    const response = await repository.updateContent(content);
    console.log(`Updated context response: ${JSON.stringify(response)}`)
    return response;
  }
}


export { ContentService }
