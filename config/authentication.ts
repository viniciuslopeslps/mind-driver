var passport = require("passport");
var passportJWT = require("passport-jwt");
var users = require("./users");
var cfg = require("./jwt-config");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = require('passport-jwt').Strategy;
let params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};


class Authentication {
  constructor(){
      passport.use(new JwtStrategy(params, function(jwt_payload, done) {
      const user = users.find(user => user.id===jwt_payload.id);
      if (user) {
        return done(null, {user: user});
      } else {
        return done(new Error("User not found"), null);
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