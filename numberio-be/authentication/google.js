// const User = require('../models/user');
// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../utils/config');

// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const configuredGoogleStrategy = new GoogleStrategy(
//   {
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: '/api/auth/google/callback',
//   },
//   function (accessToken, refreshToken, profile, done) {
//     User.findOne({ email: profile.emails[0].value }, function (err, user) {
//       if (err) return done(err);
//       if (user) {
//         return done(null, user);
//       } else {
//         let newUser = {
//           email: profile.emails[0].value,
//           fullname: profile.displayName,
//           active: true,
//         };
//         try {
//           User.create(newUser);
//           return done(null, newUser);
//         } catch (err) {
//           return done(err);
//         }
//       }
//     });
//   }
// );

// module.exports = configuredGoogleStrategy;
