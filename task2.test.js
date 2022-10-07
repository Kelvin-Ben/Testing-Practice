const reverseString = require('./task2.js');

test('the string 1 is reversed', () => {
    expect (reverseString('ascara')).toMatch(/aracsa/);
})

test('the string 2 is reversed', () => {
    expect (reverseString('a123456789')).toMatch(/987654321a/);
})