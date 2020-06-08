const router = require('../../config/express').express.Router();
import { UserService } from '../../services/user-service'
import { UserRequest, UserUpdateRequest } from '../request/user-request'
import { validate } from "class-validator";
import { Response, Request } from 'express';


router.post('/', async (req: Request, res: Response) => {
  let userRequest = new UserRequest(req.body)

  const errors = await validate(userRequest, { validationError: { target: false } });

  if (errors && errors.length == 0) {
    let service = new UserService()
    const response = await service.createUser(userRequest);

    res.status(201).json(response);
  } else {
    console.log("validation failed. errors: ", errors);
    res.status(400).json(errors);
  }
});

router.put('/', async (req: Request, res: Response) => {
  let userRequest = new UserUpdateRequest(req.body)

  const errors = await validate(userRequest, { validationError: { target: false } });

  if (errors && errors.length == 0) {
    let service = new UserService()
    const response = await service.updateUser(userRequest);

    res.status(201).json(response);
  } else {
    console.log("validation failed. errors: ", errors);
    res.status(400).json(errors);
  }
});

module.exports = router;