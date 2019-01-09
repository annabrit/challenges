const canRotateSort = require('./canRotateSort');

test('ACB - odd number of swaps', () => {
  expect(canRotateSort([1, 3, 2])).toBe(false);
});

test('BCA - 1 rotation, even number of swaps', () => {
  expect(canRotateSort([2, 3, 1])).toBe(true);
});

test('example test', () => {
  expect(canRotateSort([1, 6, 5, 2, 3, 4])).toBe(false);
});
