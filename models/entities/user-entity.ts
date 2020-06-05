import { UserRequest } from "../../controllers/request/user-request"

class User {
  email: String
  password: String

  constructor(request: UserRequest) {
    this.email = request.email;
    this.password = request.password;
  }
}

export { User }