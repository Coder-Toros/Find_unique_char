let input = document.querySelector("textarea");
let button = document.querySelector("button");
let out = document.querySelector(".out");

function findUniqueChar(text) {
  const uniqueChars = makeUniqueChars(text);

  if (uniqueChars !== "Please, insert a text") {
    for (let char of uniqueChars) {
      if (uniqueChars.indexOf(char) === uniqueChars.lastIndexOf(char)) {
        out.innerHTML = `Unique char: ${char}`;
        return out;
      }
    }
  } else {
    out.innerHTML = "Please, insert a text";
    return false;
  }

  out.innerHTML = "No unique char";

  return out;
}

function makeUniqueChars(text) {
  const purifiedText = text.trim();

  if (purifiedText === "") return (out.innerHTML = "Please, insert a text");

  let uniqueChars = [];
  let words = purifiedText.split(/\s+/);

  for (let word of words) {
    if (word !== "--" && word !== "") {
      let charCount = {};

      for (let char of word) {
        if (charCount[char]) {
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
      }

      for (let char of word) {
        if (charCount[char] === 1) {
          uniqueChars.push(char);
          break;
        }
      }
    }
  }
  return uniqueChars;
}

button.addEventListener("click", () => findUniqueChar(input.value));
