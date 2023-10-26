import { caesarCipher } from "./caesarCipher";

test("properly shifts letters by n", () => {
  expect(caesarCipher("hello", 2)).toEqual("jgnnq");
  expect(caesarCipher("hello", 0)).toEqual("hello");
  expect(caesarCipher("hello", -1)).toEqual("gdkkn");
  expect(caesarCipher("hello!", 1)).toEqual("ifmmp!");
});
