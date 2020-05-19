const router = require('../../config/express').router;
var jwt = require("jwt-simple");
import { Authentication } from '../../config/authentication';
const users = require('../../config/users');
import { UserService } from '../../services/user-service';

const cfg = require('../../config/jwt-config');


router.post("/token", async function(req, res) {

  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;

    const userService = new UserService();
    const user = await userService.authenticate(email, password);

    if (user) {
      const payload = {id: user.email};
      const token = jwt.encode(payload, cfg.jwtSecret);
      res.json({token: token});
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
  
});

router.get("/user", Authentication.authenticate(), function(req, res) {
  const user = req.user;
  res.json(user);
});


module.exports = router;