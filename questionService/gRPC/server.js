const grpc = require('@grpc/grpc-js');
const questionService = require('./services/questionService');

var protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './question.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const questionProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(questionProto.QuestionService.service, questionService);

module.exports = server;
