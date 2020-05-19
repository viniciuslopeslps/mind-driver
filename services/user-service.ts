import { UserRepository } from '../models/repositories/user-repository'


class UserService {

  async authenticate(email: String, password: String) {
    const userRepository = new UserRepository()
    const authResponse = await userRepository.authenticate(email, password)
    return authResponse;
  }
}


export { UserService }