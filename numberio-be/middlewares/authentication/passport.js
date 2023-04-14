// utils
const passport = require('passport');

// confiured strategy
const configuredJwtStrategy = require('./jwt');
//const configuredLocalStrategy = require('./local');
const configuredGoogleStrategy = require('./google');

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => done(null, user));

passport.use(configuredJwtStrategy);
passport.use(configuredGoogleStrategy);

module.exports = passport;
