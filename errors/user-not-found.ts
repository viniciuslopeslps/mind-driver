import { ApiError } from '../errors/api-errors';

class UserNorFound extends ApiError {
  constructor(stack?){
      super(404, "Not Found", "User not found", stack);
  }
}

export { UserNorFound }