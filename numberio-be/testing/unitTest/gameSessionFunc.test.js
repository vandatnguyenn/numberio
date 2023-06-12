const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../../app');
const GameSessionModel = require('../../models/gameSessionModel');
const HistoryModel = require('../../models/historyModel');
const calculateResult =
  require('../../controllers/utils/gameSession').calculateResult;

const api = supertest(app);

// setup Data, db already have data for this test

let token = '';
let gameSessionId = '';
let historyAtStart = [];

beforeAll(async () => {
  await GameSessionModel.deleteMany({});
  await HistoryModel.deleteMany({});
  historyAtStart = (await api.get('/api/history'))._body;
}, 10000);

describe('Start an Archery game in easy mode and record history after playing', () => {
  describe('Get token', () => {
    test('data are returned as json with token and game url', async () => {
      const res = await api
        .post('/api/gameSession')
        .send({ gameId: '6476405065297ca1ca865318', level: 'easy' })
        .expect(201)
        .expect('Content-Type', /application\/json/);

      const data = res._body;
      expect(data).toHaveProperty('token');
      expect(data).toHaveProperty('gameUrl');
      token = data.token;
    });
  });

  describe('Use token to get game data', () => {
    test('data are returned as json with valid questions, token can only be use one time', async () => {
      const res = await api
        .put(`/api/gameSession/getData/${token}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      await api.put(`/api/gameSession/getData/${token}`).expect(400);

      const data = res._body;
      gameSessionId = data.id;
      expect(data).toHaveProperty('questions');
      expect(data.questions.length).toBe(5);
    });
  });

  describe('Record history after game session', () => {
    test('Score are calculated correctly', async () => {
      const res = await api
        .post(`/api/gameSession/record/${gameSessionId}`)
        .send({ userAnswers: [4, 4, 1, 3, 4] })
        .expect(201)
        .expect('Content-Type', /application\/json/);
      const data = res._body;
      const expectedRs = calculateResult(
        { questions: data.questions },
        [4, 4, 1, 3, 4]
      );

      expect(data).toHaveProperty('score');
      expect(data.score).toEqual(expectedRs.score);
      expect(data).toHaveProperty('selectionResult');
      expect(data.selectionResult).toEqual(expectedRs.selectionResult);
    });

    test('New history added', async () => {
      const historyAtEnd = (await api.get('/api/history'))._body;
      expect(historyAtEnd).toHaveLength(historyAtStart.length + 1);
      const lastRecord = historyAtEnd[historyAtStart.length];
      expect(lastRecord.description).toBe(
        'Attempt playing game: Archery, level: easy'
      );

      expect(lastRecord.questions).toHaveLength(5);
      expect(lastRecord.answers).toHaveLength(5);
    });
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
