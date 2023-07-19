console.log("Hello");
console.log("Hello", 4 + 4);

const checkPalindrome = (string) => {
  let isPalindrome = string === string.split("").reverse().join("");

  if (isPalindrome) {
    return `The string '${string}' is a palindrome`;
  } else {
    return `The string '${string}' is not a palindrome`;
  }
};

console.log(`madam ---> ${checkPalindrome("madam")}`);
