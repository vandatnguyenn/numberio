const grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './utils/gRPC/question.proto';
const HOST_URI = 'localhost:3003';

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

const client = new QuestionService(HOST_URI, grpc.credentials.createInsecure());

module.exports = client;
