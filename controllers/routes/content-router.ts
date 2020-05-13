const router = require('../../config/express').router;
const contentService = require('../../services/content-service');
import { ContentRequest } from '../request/content-request'
import { validate } from "class-validator";
import { Response, Request } from 'express';


router.get('/', function (req, res) {
  res.send('Birds home page');
});

router.post('/', (req: Request, res: Response) => {
  let contextRequest = new ContentRequest(req.body)

  validate(contextRequest, { validationError: { target: false } })
    .then(errors => { // errors is an array of validation errors
      if (errors.length > 0) {
        console.log("validation failed. errors: ", errors);
        res.status(400).json(errors);
      } else {
        console.log("validation succeed");
      }
    });

});

module.exports = router;