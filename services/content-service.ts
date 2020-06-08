import { ContentRequest } from '../controllers/request/content-request'
import { Content } from '../models/entities/content-entity'
import { ContentRepository } from '../models/repositories/content-repository'


class ContentService {
  repository: ContentRepository;
  constructor(){
    this.repository = new ContentRepository();
  }

  async createContent(request: ContentRequest) {
    const content = new Content(request)
    const response = await this.repository.createContent(content);
    console.log(`Create content response: ${JSON.stringify(response)}`)
    return response;
  }

  async updateContent(request: ContentRequest) {
    const content = new Content(request)
    const response = await this.repository.updateContent(content);
    console.log(`Updated content response: ${JSON.stringify(response)}`)
    return response;
  }

  async deleteContent(title: String) {
    const response = await this.repository.deleteContent(title);
    console.log(`Deleted con response: ${JSON.stringify(response)}`)
    return response;
  }
}


export { ContentService }
