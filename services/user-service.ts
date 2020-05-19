import { UserRepository } from '../models/repositories/user-repository'


class UserService {
  userRepository: UserRepository;
  constructor(){
    this.userRepository = new UserRepository()
  }

  async authenticate(email: String, password: String) {
    const authResponse = await this.userRepository.authenticate(email, password)
    return authResponse;
  }

  async findByEmail(email: String){
    const user = await this.userRepository.findByEmail(email)
    return user;
  }
}


export { UserService }