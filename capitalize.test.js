import { capitalize } from "./capitalize";

test("capitalizes first letter", () => {
  const word = "hello";
  expect(capitalize(word)).toEqual("Hello");
});
