import { UserRepository } from '../models/repositories/user-repository'
import { UserRequest } from '../controllers/request/user-request';
let jwt = require("jwt-simple");
const cfg = require('../config/jwt-config');
const { User } = require('../models/entities/user-entity');

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
    return await this.userRepository.findByEmail(email)
  }

  async createUser(request: UserRequest){
    const user = new User(request);
    return await this.userRepository.createUser(user);
  }
}


export { UserService }