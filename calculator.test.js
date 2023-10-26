import { calculator } from "./calculator";

test("properly adds two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(1.5, 2)).toBe(3.5);
});

test("properly subtracts two numbers", () => {
  expect(calculator.subract(4, 3)).toBe(1);
  expect(calculator.subract(4.5, 3)).toBe(1.5);
});

test("properly divides two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(2, 10)).toBeCloseTo(0.2);
});

test("properly multiplies two numbers", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
  expect(calculator.multiply(2.2, 2)).toBeCloseTo(4.4);
});
