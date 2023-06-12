const mongoose = require('mongoose');
const grpc = require('@grpc/grpc-js');
const config = require('./utils/config');
const server = require('./gRPC/server');

mongoose
  .connect(config.MONGO_DB_URL)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message);
  });

server.bindAsync(
  `127.0.0.1:${config.PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log('Server running at PORT', port);
    server.start();
  }
);
