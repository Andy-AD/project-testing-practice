import { calculator } from "./calculator";

test("add 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("add 45 + 22 to equal 67", () => {
  expect(calculator.add(45, 22)).toBe(67);
});

test("subtract 5 - 2 to equal 3", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});
test("subtract 54 - 21 to equal 33", () => {
  expect(calculator.subtract(54, 21)).toBe(33);
});
test("divide 6 / 3 to equal 2", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});
test("divide 46 / 2 to equal 23", () => {
  expect(calculator.divide(46, 2)).toBe(23);
});
test("multiply 2 * 3 to equal 6", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
test("multiply 25 * 4 to equal 100", () => {
  expect(calculator.multiply(25, 4)).toBe(100);
});
