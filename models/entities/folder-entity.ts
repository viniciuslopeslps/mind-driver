class Folder {
  title: String;
  imageUrl: String;
  updatedAt: Date;
  createdAt: Date;

  constructor(title: String, imageUrl: String){
    this.title = title;
    this.imageUrl = imageUrl;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}