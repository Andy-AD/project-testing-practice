export default function ceasarCipher(string) {
  let newString = "";
  let newChar;
  for (const char of string) {
    if (/[!,.?\s]/g.test(char)) {
      newChar = char;
    } else if (char === "z" || char === "Z") {
      char === "z" ? (newChar = "a") : (newChar = "A");
    } else {
      newChar = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    newString = newString + newChar;
  }

  return newString;
}
