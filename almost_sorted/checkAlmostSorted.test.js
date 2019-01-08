const checkAlmostSorted = require('./checkAlmostSorted');

test('already sorted', () => {
  expect(checkAlmostSorted([1, 2, 3, 4])).toBe('yes');
});

test('simple swap', () => {
  expect(checkAlmostSorted([1, 3, 2, 4])).toBe('yes swap 1 2');
});

test('reverse not including end index', () => {
  expect(checkAlmostSorted([1, 5, 4, 3, 2, 6])).toBe('yes reverse 1 4');
});

test('reverse including end index', () => {
  expect(checkAlmostSorted([1, 5, 4, 3, 2])).toBe('yes reverse 1 4');
});

test('reverse including beginning index', () => {
  expect(checkAlmostSorted([6, 5, 4, 3, 7])).toBe('yes reverse 0 3');
});

test('no swap possible', () => {
  expect(checkAlmostSorted([1, 3, 4, 2])).toBe('no');
});

test('should be no', () => {
  expect(checkAlmostSorted([1, 8, 7, 11, 14, 10, 17])).toBe('no');
});
