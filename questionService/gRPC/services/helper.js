const grpc = require('@grpc/grpc-js');
const jwt = require('jsonwebtoken');
const extractUser = (_, callback) => {
  const token = _.metadata['internalRepr'].get('authorization');

  if (token === null)
    callback({
      code: grpc.status.UNAUTHENTICATED,
      message: 'Failed to authenticate',
    });
  const public_key = `-----BEGIN PUBLIC KEY-----\n${KEYCLOAK_PUBLIC_KEY}\n-----END PUBLIC KEY-----`;
  const decodedToken = jwt.verify(token, public_key);

  if (
    !decodedToken ||
    !decodedToken.email ||
    decodedToken.realm_access.roles.length === 0
  ) {
    callback({
      code: grpc.status.UNAUTHENTICATED,
      message: 'Failed to authenticate',
    });
  }

  // if (decodedToken.exp < Date.now()) {
  //   callback({
  //     code: grpc.status.UNAUTHENTICATED,
  //     message: 'Failed to authenticate',
  //   });
  // }

  return {
    email: decodedToken.email,
    role: decodedToken.realm_access.roles.includes('admin') ? 'admin' : 'user',
  };
};

const authorizeAdmin = (user, callback) => {
  if (!user.role === 'admin') {
    callback({
      code: grpc.status.UNAUTHENTICATED,
      message: 'Failed to authenticate',
    });
  }
};

const authorizeUser = (user, callback) => {
  if (!(user.role === 'admin' || user.role === 'user')) {
    callback({
      code: grpc.status.UNAUTHENTICATED,
      message: 'Failed to authenticate',
    });
  }
};

const validGameToken = (_, callback) => {
  const token = _.metadata['internalRepr'].get('authorization');
  try {
    const { gameSessionId } = jwt.verify(token, GAME_SESSION_SECRET);
    if (!gameSessionId) {
      callback({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Failed to authenticate',
      });
    }
  } catch (err) {
    callback({
      code: grpc.status.UNAUTHENTICATED,
      message: 'Failed to authenticate',
    });
  }
};
module.exports = { extractUser, validGameToken, authorizeAdmin, authorizeUser };
