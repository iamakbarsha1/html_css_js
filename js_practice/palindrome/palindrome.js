console.log("Palindrome");

const checkPalindrome = (string) => {
  let isPalindrome = string === string.split("").reverse().join("");

  if (isPalindrome) {
    let statement = `The provided string '${string}' is a PALINDROME`;
    document.getElementById(string).innerHTML = statement;
    return statement;
  } else {
    let statement = `The provided string '${string}' is not a PALINDROME`;
    document.getElementById(string).innerHTML = statement;
    return statement;
  }
};

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("akbarsha"));
console.log(checkPalindrome("1234321"));
