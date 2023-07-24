console.log("JS Interview Questions");

//!  Q1: Explain what a callback function is and provide a simple example
let array = [0, 1, 2, 3, 4, 5];

const modifyArr = (arr, callback) => {
  arr.push(100);

  callback(arr);
};

const msgToShowArrModified = (array) => {
  console.log(`The arr has been modified`, array);
};

modifyArr(array, msgToShowArrModified);

//!  Q2: Given a string, reverse each word in the sentence
let string = `Welcome to ReactJS - Akbarsha!`;

const reverseBySeparator = (str, separator) => {
  let reveredString = str?.split(separator).reverse().join(separator);
  return reveredString;
};

const reverse_string = reverseBySeparator(string, ""); // !ahsrabkA - SJtcaeR ot emocleW
const reverse_each_word = reverseBySeparator(reverse_string, " "); // emocleW ot SJtcaeR - !ahsrabkA

//! Q10: FizzBuzz Challengeujyhsdfxdsdfffdfffffffffsjnm,kijujis 
for (let i = 1; i <= 100; i++) {
  let fizz = i % 3 === 0,
    buzz = i % 5 === 0;

  //   console.log(fizz, i, buzz);
  //   console.log(fizz ? `fizz` : fizz && buzz ? `fizzBuzz` : buzz ? `buzz` : i);
  // console.log(fizz ? `fizz` :  `buzz`)

  console.log(fizz ? (buzz ? "FizzBuzz" : "Fizz") : buzz ? "Buzz" : i);
}
