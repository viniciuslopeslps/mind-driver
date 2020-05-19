const router = require('../../config/express').router;

import { Authentication } from '../../config/authentication';
import { UserService } from '../../services/user-service';



router.post("/token", async function (req, res) {
  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;

    const userService = new UserService();
    const token = await userService.authenticate(email, password);

    if (token) {
      res.json({ token: token });
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }

});

router.get("/user", Authentication.authenticate(), function (req, res) {
  const user = req.user;
  res.json(user);
});


module.exports = router;