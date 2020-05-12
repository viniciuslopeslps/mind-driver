class Content {
  constructor(title, type, description, imageUrl, path) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.path = path;
  }
}