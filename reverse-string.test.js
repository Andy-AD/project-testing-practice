import reverseString from "./reverse-string";

test("Expect 'hello' to be 'olleh'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Expect 'trial' to be 'lairt'", () => {
  expect(reverseString("trial")).toBe("lairt");
});
