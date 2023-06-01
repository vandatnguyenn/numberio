const calculateResult =
  require('../../controllers/utils/gameSession').calculateResult;

const testData = [
  {
    description:
      'Số gồm có 6 đơn vị, 6 phần trăm, 6 phần mười và 7 phần nghìn là?',
    answers: ['6,766', '0,667', '0,767', '6,667'],
    correctAnswer: 4,
  },
  {
    description: 'Kết quả của phép tính 9 - 3 : 6',
    answers: ['1', '2', '7', '8.5'],
    correctAnswer: 4,
  },
  {
    description:
      'Bác Tư đi xe đạp với vận tốc 12km/giờ. Tính thời gian để bác Tư đi được 30km',
    answers: [
      '2 giờ 30 phút',
      '2 giờ 45 phút',
      '2 giờ 20 phút',
      '2 giờ 40 phút',
    ],
    correctAnswer: 1,
    difficulty: 1,
  },
  {
    description: '3/5 của 4 tấn là',
    answers: ['24kg', '240kg', '2400kg', '24000kg'],
    correctAnswer: 3,
    difficulty: 1,
  },
  {
    description: 'Điều nào dưới đây là sai?',
    answers: ['1/3 < 34%', '1/2 > 1/3', '3,14 = 3 + 1/10 + 4%', '11/50 > 23%'],
    correctAnswer: 4,
  },
];

test('User answered correctly 5/5', () => {
  const result = calculateResult({ questions: testData }, [4, 4, 1, 3, 4]);

  expect(result.score).toBe(5);
  expect(result.selectionResult).toEqual([true, true, true, true, true]);
});

test('User answered correctly 3/5', () => {
  const result = calculateResult({ questions: testData }, [4, 2, 1, 2, 4]);

  expect(result.score).toBe(3);
  expect(result.selectionResult).toEqual([true, false, true, false, true]);
});

test('User answered correctly 0/5', () => {
  const result = calculateResult({ questions: testData }, [1, 2, 3, 4, 1]);

  expect(result.score).toBe(0);
  expect(result.selectionResult).toEqual([false, false, false, false, false]);
});
