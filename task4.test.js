const capitalize = require('./task4.js');

test('the string is capitalized', () => {
  expect(capitalize('david')).toBe('David');
})