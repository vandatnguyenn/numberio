// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const User = require('../models/user');
// const { SECRET } = require('../utils/config');

// const opts = {};

// const cookieExtractor = (req) => {
//   let token = null;
//   if (req && req.cookies) {
//     token = req.cookies['access-token'];
//   }

//   return token;
// };

// opts.jwtFromRequest = cookieExtractor;
// opts.secretOrKey = SECRET;

// const configuredJwtStrategy = new JwtStrategy(opts, (jwt_payload, done) => {
//   User.findById(jwt_payload.id, (err, user) => {
//     if (err) {
//       return done(err, false);
//     }
//     if (user) {
//       return done(null, user);
//     } else {
//       return done(null, false);
//     }
//   });
// });

// module.exports = configuredJwtStrategy;
