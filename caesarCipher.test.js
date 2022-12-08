import ceasarCipher from "./caesarCipher";

test("expect 'hello' to equal '' ", () => {
  expect(ceasarCipher("hello")).toBe("ifmmp");
});

test("expect 'jumbo' to equal 'kvncp'", () => {
  expect(ceasarCipher("jumbo")).toBe("kvncp");
});

test("expect 'abcdefghijklmnopqrstuvwxyz' to equal 'bcdefghijklmnopqrstuvwxyza'", () => {
  expect(ceasarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("expect 'Trial!?.' to equal 'Usjbm!?.'", () => {
  expect(ceasarCipher("Trial!?.")).toBe("Usjbm!?.");
});
