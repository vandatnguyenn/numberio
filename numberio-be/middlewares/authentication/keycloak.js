const { KEYCLOAK_PUBLIC_KEY } = require('../../utils/config');

const jwt = require('jsonwebtoken');

const extractUser = async (req, res, next) => {
  // const bearerHeader = req.headers['authorization'];
  // const token = bearerHeader && bearerHeader.split(' ')[1];
  // if (token === null) return res.status(401).send();
  // const public_key = `-----BEGIN PUBLIC KEY-----\n${KEYCLOAK_PUBLIC_KEY}\n-----END PUBLIC KEY-----`;
  // try {
  //   const decodedToken = jwt.verify(token, public_key);
  //   console.log(decodedToken);
  //   if (
  //     !decodedToken ||
  //     !decodedToken.email ||
  //     decodedToken.realm_access.roles.length === 0
  //   ) {
  //     return res.status(401).send();
  //   }

  //   // if (decodedToken.exp < Date.now()) {
  //   //   return res.status(401).send();
  //   // }

  //   req.user = {
  //     email: decodedToken.email,
  //     role: decodedToken.realm_access.roles.includes('admin')
  //       ? 'admin'
  //       : 'user',
  //     token: token,
  //   };

  //   next();
  // } catch (err) {
  //   return res.status(401).send();
  // }
  req.user = {
    token: 'Hi',
    role: 'admin',
  };
  next();
};

module.exports = {
  extractUser,
};
