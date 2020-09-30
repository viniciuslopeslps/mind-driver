import { ContentType } from "./content-type";
import moment = require('moment');
import { ContentRequest } from '../../controllers/request/content-request'

class Content {
  title: String;
  type: ContentType;
  description: String;
  imageUrl: String;
  createdAt: String;
  updatedAt: String;
  path: String;
  user: String;



  constructor(request: ContentRequest, user: String) {
    this.title = request.title;
    this.type = request.type;
    this.description = request.description;
    this.imageUrl = request.imageUrl;
    this.path = request.path;
    this.user = user;
    this.createdAt = moment(new Date()).format('DD/MM/yyyy');
  }
}

export { Content }