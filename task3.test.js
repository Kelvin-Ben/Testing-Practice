const Calculator = require('./task3.js');

const calc = new Calculator;

describe('calculator', () => {
  describe('add', () => {
    test('add two numbers 1', () => {
      expect(calc.add(1, 2)).toBe(3);
    })
    test('add two numbers 2', () => {
      expect(calc.add(33, 2)).toBe(35);
    })
    test('add two numbers 3', () => {
      expect(calc.add(21, 8)).toBe(29);
    })
  });
  describe('subtract', () => {
    test('subtract two numbers 1', () => {
      expect(calc.subtract(80, 78)).toBe(2);
    })
    test('subtract two numbers 2', () => {
      expect(calc.subtract(5, 7)).toBe(-2);
    })
    test('subtract two numbers 3', () => {
      expect(calc.subtract(8, 8)).toBe(0);
    })
  });
  describe('multiply', () => {
    test('multiply two numbers 1', () => {
      expect(calc.multiply(15, 2)).toBe(30);
    })
    test('multiply two numbers 2', () => {
      expect(calc.multiply(5, 3)).toBe(15);
    })
    test('multiply two numbers 3', () => {
      expect(calc.multiply(125, 5)).toBe(625);
    })
  });
  describe('divide', () => {
    test('divide two numbers 1', () => {
      expect(calc.divide(30, 2)).toBe(15);
    })
    test('divide two numbers 2', () => {
      expect(calc.divide(70, 4)).toBe(17.5);
    })
    test('divide two numbers 3', () => {
      expect(calc.divide(20, 3)).toBeCloseTo(6.67);
    })
  });
})