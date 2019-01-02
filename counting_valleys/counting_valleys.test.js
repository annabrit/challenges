const countValleys = require('./counting_valleys.js');

test('8 length string', () => {
  expect(countValleys('UDDDUDUU')).toBe(1);
});

test('12 length string', () => {
  expect(countValleys('DDUUDDUDUUUD')).toBe(2);
});
