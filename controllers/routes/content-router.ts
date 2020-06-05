const router = require('../../config/express').express.Router();
import { ContentService } from '../../services/content-service'
import { ContentRequest } from '../request/content-request'
import { validate } from "class-validator";
import { Response, Request } from 'express';
import { Authentication } from '../../config/authentication';


router.post('/', Authentication.authenticate(), async (req: Request, res: Response) => {
  let contextRequest = new ContentRequest(req.body)

  const errors = await validate(contextRequest, { validationError: { target: false } });

  if (errors && errors.length == 0) {
    let service = new ContentService()
    const response = await service.createContent(contextRequest);

    res.status(201).json(response);
  } else {
    console.log("validation failed. errors: ", errors);
    res.status(400).json(errors);
  }
});

router.put('/', Authentication.authenticate(), async (req: Request, res: Response) => {
  let contextRequest = new ContentRequest(req.body)

  const errors = await validate(contextRequest, { validationError: { target: false } });

  if (errors && errors.length == 0) {
    let service = new ContentService()
    const response = await service.updateContent(contextRequest);

    res.status(200).json(response);
  } else {
    console.log("validation failed. errors: ", errors);
    res.status(400).json(errors);
  }
});

router.delete('/:title', Authentication.authenticate(), async (req: Request, res: Response) => {
  const title = req.params.title;

  let service = new ContentService()
  const response = await service.deleteContent(title);

  res.status(200);
});

module.exports = router;