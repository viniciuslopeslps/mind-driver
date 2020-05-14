const router = require('../../config/express').router;
import { ContentService } from '../../services/content-service'
import { ContentRequest } from '../request/content-request'
import { validate } from "class-validator";
import { Response, Request } from 'express';


router.get('/', function (req: Request, res: Response) {
  res.send('Birds home page');
});

router.post('/', async (req: Request, res: Response) => {
  let contextRequest = new ContentRequest(req.body)

  const errors = await validate(contextRequest, { validationError: { target: false } });

  if (errors && errors.length == 0) {
    let service = new ContentService()
    const response = await service.createContext(contextRequest);

    res.status(201).json(response);
  } else {
    console.log("validation failed. errors: ", errors);
    res.status(400).json(errors);
  }
});

router.put('/', async (req: Request, res: Response) => {
  let contextRequest = new ContentRequest(req.body)

  const errors = await validate(contextRequest, { validationError: { target: false } });

  if (errors && errors.length == 0) {
    let service = new ContentService()
    const response = await service.updateContext(contextRequest);

    res.status(200).json(response);
  } else {
    console.log("validation failed. errors: ", errors);
    res.status(400).json(errors);
  }
});
module.exports = router;