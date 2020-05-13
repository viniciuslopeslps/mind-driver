import { ContentType } from "./content-type";
import { ContentRequest }  from '../../controllers/request/content-request'

class Content {
  title: String;
  type: ContentType;
  description: String;
  imageUrl: String;
  createdAt: Date;
  updatedAt: Date;
  path: String;

  constructor(request: ContentRequest) {
    this.title = request.title;
    this.type = request.type;
    this.description = request.description;
    this.imageUrl = request.imageUrl;
    this.path = request.path;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export { Content }