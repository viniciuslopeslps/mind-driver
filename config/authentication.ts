const passport = require("passport");
const passportJWT = require("passport-jwt");
import cfg = require("./jwt-config");
import { UserService } from '../services/user-service';

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = require('passport-jwt').Strategy;
let params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};


class Authentication {
  constructor() {
    passport.use(new JwtStrategy(params, async function (jwt_payload, done) {
      const userService = new UserService()
      const user = await userService.findByEmail(jwt_payload.id);
      if (user) {
        return done(null, { user: user });
      } else {
        return done(new Error("USER_NOT_FOUND"), null);
      }
    }));

  }
  initialize() {
    return passport.initialize();
  }

  static authenticate() {
    return passport.authenticate("jwt", cfg.jwtSession);
  }
}

export { Authentication }