const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { GraphQLError } = require('graphql');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolver');
const mongoose = require('mongoose');
const { MONGO_DB_URL, PORT, KEYCLOAK_PUBLIC_KEY } = require('./utils/config');
const jwt = require('jsonwebtoken');

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: PORT },
  context: async ({ req, res }) => {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader && bearerHeader.split(' ')[1];

    if (token === null)
      throw new GraphQLError('User is not authenticated', {
        extensions: {
          code: 'UNAUTHENTICATED',
          http: { status: 401 },
        },
      });

    const public_key = `-----BEGIN PUBLIC KEY-----\n${KEYCLOAK_PUBLIC_KEY}\n-----END PUBLIC KEY-----`;
    try {
      const decodedToken = jwt.verify(token, public_key, {
        algorithms: 'RS256',
      });

      if (
        !decodedToken ||
        !decodedToken.email ||
        decodedToken.realm_access.roles.length === 0
      ) {
        throw new GraphQLError('User is not authenticated', {
          extensions: {
            code: 'UNAUTHENTICATED',
            http: { status: 401 },
          },
        });
      }
      // if (decodedToken.exp < Date.now()) {
      //   throw new GraphQLError('Expired token', {
      //     extensions: {
      //       code: 'UNAUTHENTICATED',
      //       http: { status: 401 },
      //     },
      //   });
      // }
      return {
        email: decodedToken.email,
        role: decodedToken.realm_access.roles.includes('admin')
          ? 'admin'
          : 'user',
      };
    } catch (err) {}
  },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
