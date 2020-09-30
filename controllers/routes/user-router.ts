const router = require('../../config/express').express.Router();
import { UserService } from '../../services/user-service'
import { UserRequest } from '../request/user-request'
import { validate } from "class-validator";
import { Response, Request } from 'express';
import { Authentication } from '../../config/authentication';


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

router.put('/', Authentication.authenticate(), async (req: Request, res: Response) => {
  let userRequest = new UserRequest(req.body)

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

router.delete('/:email', Authentication.authenticate(), async (req: Request, res: Response) => {
  const email = req.params.email;

  let service = new UserService()
  const response = await service.deleteUser(email);

  res.status(200).json(response);
});

module.exports = router;