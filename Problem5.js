let str = "@#$&%!~";
let regexp = /[a-zA-Z0-9]+/; // Using regular expression and its test function
if (regexp.test(str)) {
  console.log("The string is invalid as it contains normal characters");
} else {
  console.log("The string is valid");
}
