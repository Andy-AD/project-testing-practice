import analyzeArray from "./analyzeArray";

test("Analyze array test #1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Analyze array test #2", () => {
  expect(analyzeArray([10, 8, 3, 4, 2, 6, 7, 19, 4])).toStrictEqual({
    average: 7,
    min: 2,
    max: 19,
    length: 9,
  });
});
