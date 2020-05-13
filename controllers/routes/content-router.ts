const router = require('../../config/express').router;
import { ContentService } from '../../services/content-service'
import { ContentRequest } from '../request/content-request'
import { validate } from "class-validator";
import { Response, Request } from 'express';


router.get('/', function (req: Request, res: Response) {
  res.send('Birds home page');
});

router.post('/', (req: Request, res: Response) => {
  let contextRequest = new ContentRequest(req.body)

  validate(contextRequest, { validationError: { target: false } })
    .then(errors => {
      if (errors.length > 0) {
        console.log("validation failed. errors: ", errors);
        res.status(400).json(errors);
      } else {
        let service = new ContentService()
        service.createContext(contextRequest);
      }
    });

});

module.exports = router;