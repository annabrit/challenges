const getDistanceFromMagicSquare = require('./magicSquare');

test('example', () => {
  expect(getDistanceFromMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]])).toBe(7);
});

test('test 0', () => {
  expect(getDistanceFromMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]])).toBe(1);
});

test('test 1', () => {
  expect(getDistanceFromMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]])).toBe(4);
});

test('test 2', () => {
  expect(getDistanceFromMagicSquare([[7, 6, 5], [7, 2, 8], [5, 3, 4]])).toBe(
    18
  );
});

test('magic square', () => {
  expect(getDistanceFromMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 6]])).toBe(0);
});
