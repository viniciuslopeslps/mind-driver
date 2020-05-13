import { ContentType } from "./content-type";

class Content {
  title: String;
  type: ContentType;
  description: String;
  imageUrl: String;
  createdAt: Date;
  updatedAt: Date;
  path: String;

  constructor(title: String, type: ContentType, description: String, imageUrl: String, path: String) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.path = path;
  }
}