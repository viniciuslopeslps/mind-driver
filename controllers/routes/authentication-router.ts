const router = require('../../config/express').router;
var jwt = require("jwt-simple");
import { Authentication } from '../../config/authentication';
const users = require('../../config/users');
const cfg = require('../../config/jwt-config');


router.post("/token", function(req, res) {

  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;
    
    var user = users.find(function(u) {
      return u.email === email && u.password === password;
    });
    if (user) {
      var payload = {id: user.id};
      var token = jwt.encode(payload, cfg.jwtSecret);
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