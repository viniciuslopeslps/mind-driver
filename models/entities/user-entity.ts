import { UserRequest } from "../../controllers/request/user-request"
import moment = require('moment');

class User {
  email: String
  password: String
  createdAt: String;
  updatedAt: String;

  constructor({email, password}) {
    this.email = email;
    this.password = password;
    this.createdAt = moment(new Date()).format('DD/MM/yyyy');
  }
  
}

export { User }