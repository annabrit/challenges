const lexIncrease = require('./lexIncrease');

test('reverse sorted', () => {
  expect(lexIncrease('dcba')).toBe('no answer');
});

test('sorted', () => {
  expect(lexIncrease('abcd')).toBe('abdc');
});

test('', () => {
  expect(lexIncrease('adfb')).toBe('afbd');
});
