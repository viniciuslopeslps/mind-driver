import { UserRepository } from '../models/repositories/user-repository'
import { UserRequest } from '../controllers/request/user-request';
import { UserNorFound } from '../errors/user-not-found';

let jwt = require("jwt-simple");
const cfg = require('../config/jwt-config');
const { User } = require('../models/entities/user-entity');
const bcrypt = require('bcrypt');


class UserService {
  userRepository: UserRepository;
  
  constructor(){
    this.userRepository = new UserRepository()
  }

  async authenticate(email: String, password: String) {
    const user = await this.findByEmail(email);
    if (user){
      if(!bcrypt.compareSync(password, user.password)) {
        throw new UserNorFound();
      }
      const payload = {id: user.email};
      return jwt.encode(payload, cfg.jwtSecret);
    }
   throw new UserNorFound();
  }

  async findByEmail(email: String){
    return await this.userRepository.findByEmail(email)
  }

  async createUser(request: UserRequest){
    const user = new User(request);
    return await this.userRepository.createUser(user);
  }

  async updateUser(request: UserRequest){
    const user = await this.findByEmail(request.email);
    if (user){
      const newUser = new User(request);
      return await this.userRepository.updateUser(user, newUser);
    }
    return null;
  }

  async deleteUser(email: String) {
    const response = await this.userRepository.deleteUser(email);
    console.log(`Deleted user: ${JSON.stringify(response)}`)
    return response;
  }

}


export { UserService }