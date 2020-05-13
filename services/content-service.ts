import { ContentRequest } from '../controllers/request/content-request'
import { Content } from '../models/entities/content-entity'
import { ContentRepository } from '../models/repositories/content-repository'


class ContentService {
  createContext(request: ContentRequest) {

    const content = new Content(request)
    let repository = new ContentRepository();
    repository.createContext(content);
  }
}


export { ContentService }
