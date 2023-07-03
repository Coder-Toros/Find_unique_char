// Selecting DOM elements
let input = document.querySelector("textarea");
let button = document.querySelector("button");
let out = document.querySelector(".out");

// Function to find the first unique character in a text
function findUniqueChar(text) {  
  // Get an array of unique characters
  const uniqueChars = makeUniqueChars(text);

  // Check if there are unique characters
  if (uniqueChars !== "Please, insert a text") {
    // Iterate over the unique characters
    for (let char of uniqueChars) {
      // Check if the character is unique
      if (uniqueChars.indexOf(char) === uniqueChars.lastIndexOf(char)) {
        // Display the first unique character
        out.innerHTML = `The first unique char: ${char}`;
        return out;
      }
    }
  } else {
    // If input text is empty, display a message
    out.innerHTML = "Please, insert a text";
    return false;
  }
  
  // If no unique character is found, display a message
  out.innerHTML = "No unique char";
  return out;
}

// Function to obtain an array of unique characters from a text
function makeUniqueChars(text) {
  const purifiedText = text.trim();
  
  // Check if the text is empty after trimming spaces
  if (purifiedText === "") return (out.innerHTML = "Please, insert a text");

  let uniqueChars = [];
  let words = purifiedText.split(/\s+/); // Split the text into words

  // Iterate over each word
  for (let word of words) {
    // Skip words that are "--" or empty
    if (word !== "--" && word !== "") {
      let charCount = {};

      // Count the occurrences of each character in the word
      for (let char of word) {
        if (charCount[char]) {
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
      }

      // Find the first unique character in the word
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

// Starting a function by clicking the button
button.addEventListener("click", () => findUniqueChar(input.value));
