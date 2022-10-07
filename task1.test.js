
const stringLength = require('./task1.js');

test ('The string has 9 characters', () => {
    expect (stringLength('abcdefghi')).toBe(9)
})

test ('The string has too many characters', () => {
    expect(() => stringLength('abcdefghijklmn')).toThrow(Error);
})

test ('The string is too short', () => {
    expect(() => stringLength('')).toThrow(Error);
})