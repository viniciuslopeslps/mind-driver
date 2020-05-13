
import { IsNotEmpty } from "class-validator";
import { ContentType } from "../../models/entities/content-type";


export class ContentRequest {
  @IsNotEmpty({
    message: "The field title can not be empty"
  })
  title: String;

  @IsNotEmpty({
    message: "The type can not be empty"
  })
  type: ContentType;

  @IsNotEmpty({
    message: "The description can not be empty"
  })
  description: String;

  @IsNotEmpty({
    message: "The imageUrl can not be empty"
  })
  imageUrl: String;

  @IsNotEmpty({
    message: "The path can not be empty"
  })
  path: String;

  constructor(requestObject: any) {
    this.title = requestObject.title;
    this.type = requestObject.type;
    this.description = requestObject.description;
    this.imageUrl = requestObject.imageUrl;
    this.path = requestObject.path;
  }
}