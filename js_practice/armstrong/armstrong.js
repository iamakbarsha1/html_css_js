console.log("armstrong");

const armstrong = (num) => {
  if (num === 0) {
    return 1;
  }

  let sum = 0,
    temp = num;

  const numberOfDigits = temp.toString().length;

  while (temp > 0) {
    let remainder = temp % 10; // finding the one's digit

    sum = sum + remainder ** numberOfDigits; // remainder ** numberOfDigits ---> helps to multiply the remainder itself to the numberOfDigits times.

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
  }

  let newPara;

  if (sum === num) {
    newPara = `<p id="">${num} is an Armstrong number</p>`;
    document
      .getElementById("armstrong")
      .insertAdjacentHTML("beforebegin", newPara);
  } else {
    newPara = `<p id="">${num} is not an Armstrong number</p>`;
    document
      .getElementById("armstrong")
      .insertAdjacentHTML("beforebegin", newPara);
  }
};

armstrong(11);
armstrong(153);
armstrong(1634);
