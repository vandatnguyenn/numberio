const grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
const { GRPC_BE_URL } = require('../config');
const PROTO_PATH = './utils/gRPC/question.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const QuestionService =
  grpc.loadPackageDefinition(packageDefinition).QuestionService;

const client = new QuestionService(
  GRPC_BE_URL,
  grpc.credentials.createInsecure()
);

module.exports = client;
