// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count occurrences of a substring in a string
function countOccurrences(str, subStr) {
  return str.split(subStr).length - 1;
}

// Check if string contains a substring
function contains(str, subStr) {
  return str.indexOf(subStr) !== -1;
}

// Capitalize the first letter of each word in a string
function capitalizeWords(str) {
  return str.replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });
}