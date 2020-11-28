let str = "@#$&%!~";
let re = /[a-zA-Z0-9]+/;
if (re.test(str)) {
  console.log("The string is invalid as it contains normal characters");
} else {
  console.log("The string is valid");
}
