const router = require('../../config/express').express.Router();

import { Authentication } from '../../config/authentication';
import { UserService } from '../../services/user-service';
import { ApiError } from '../../errors/api-errors';


router.post("/token", async function (req, res) {
  const { email, password } = req.body;
  const userService = new UserService();
  try {
    const token = await userService.authenticate(email, password);
    res.json({ token: token });

  } catch (ex) {
    let status = ex.httpCode ? ex.httpCode : 500;
    res.status(status).json(ex);
  }
});

router.get("/user", Authentication.authenticate(), function (req, res) {
  const user = req.user;
  res.json(user);
});


module.exports = router;