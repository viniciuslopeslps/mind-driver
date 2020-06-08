import { IsNotEmpty, ValidateIf } from "class-validator";

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

export class UserUpdateRequest {

  @IsNotEmpty({
    message: "The field email can not be empty"
  })
  email: String

  @ValidateIf(o => o.email === undefined)
  @IsNotEmpty({
    message: "The field password can not be empty"
  })
  password: String

  constructor(requestObject: any) {
    this.email = requestObject.email;
    this.password = requestObject.password;
  }
}