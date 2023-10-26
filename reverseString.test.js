import { reverse } from "./reverseString";

test("reverses string", () => {
  const word = "hello";
  expect(reverse(word)).toEqual("olleh");
});
