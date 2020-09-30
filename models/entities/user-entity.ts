import moment = require('moment');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class User {
  email: String
  password: String
  createdAt: String;
  updatedAt: String;

  constructor({ email, password }) {
    this.email = email;
    this.password = bcrypt.hashSync(password, saltRounds);
    this.createdAt = moment(new Date()).format('DD/MM/yyyy');
  }
}

export { User }