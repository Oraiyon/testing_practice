import { analyzeArray } from "./analyzeArray";

test("properly analyzes array", () => {
  const array = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
