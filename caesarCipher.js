export const caesarCipher = (string, n) => {
  // Allows for -n
  if (n < 0) {
    return caesarCipher(string, n + 26);
  }

  let output = "";

  // Go through each letter
  for (let i = 0; i < string.length; i++) {
    let current = string[i];

    // Checks if its a letter using regex
    if (current.match(/[a-z]/i)) {
      const code = string.charCodeAt(i);

      // For uppercase letters
      if (code >= 65 && code <= 90) {
        current = String.fromCharCode(((code - 65 + n) % 26) + 65);
      }

      // For lowercase letters
      else if (code >= 97 && code <= 122) {
        current = String.fromCharCode(((code - 97 + n) % 26) + 97);
      }
    }
    output += current;
  }
  return output;
};
