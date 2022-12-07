import capitalize from "./capitalize";

test("Expect 'hello' to be 'Hello'", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Expect 'alexander' to be 'Alexander'", () => {
    expect(capitalize("alexander")).toBe("Alexander");
  });
