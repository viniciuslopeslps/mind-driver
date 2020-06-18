import { IsNotEmpty } from "class-validator";

export class UserRequest {

  @IsNotEmpty({
    message: "The field email can not be empty"
  })
  email: String
  @IsNotEmpty({
    message: "The field password can not be empty"
  })
  password: String

  constructor(requestObject: any) {
    this.email = requestObject.email;
    this.password = requestObject.password;
  }
}