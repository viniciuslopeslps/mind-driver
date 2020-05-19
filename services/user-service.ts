import { UserRepository } from '../models/repositories/user-repository'
let jwt = require("jwt-simple");
const cfg = require('../config/jwt-config');

class UserService {
  userRepository: UserRepository;
  
  constructor(){
    this.userRepository = new UserRepository()
  }

  async authenticate(email: String, password: String) {
    const authResponse = await this.userRepository.authenticate(email, password)

    if (authResponse) {
      const payload = {id: authResponse.email};
      return jwt.encode(payload, cfg.jwtSecret);
    }
    return null;
  }

  async findByEmail(email: String){
    const user = await this.userRepository.findByEmail(email)
    return user;
  }
}


export { UserService }