import { ContentRequest } from '../controllers/request/content-request'
import { Content } from '../models/entities/content-entity'
import { ContentRepository } from '../models/repositories/content-repository'


class ContentService {
  async createContent(request: ContentRequest) {

    const content = new Content(request)
    let repository = new ContentRepository();
    const response = await repository.createContent(content);
    console.log(`Create content response: ${JSON.stringify(response)}`)
    return response;
  }

  async updateContent(request: ContentRequest) {
    const content = new Content(request)
    let repository = new ContentRepository();
    const response = await repository.updateContent(content);
    console.log(`Updated content response: ${JSON.stringify(response)}`)
    return response;
  }

  async deleteContent(title: String) {
    let repository = new ContentRepository();
    const response = await repository.deleteContent(title);
    console.log(`Deleted con response: ${JSON.stringify(response)}`)
    return response;
  }
}


export { ContentService }
