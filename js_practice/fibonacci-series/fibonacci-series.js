console.log("fibonacci-series");

const fibinocciSeries = (totalCount) => {
  let num1 = 0,
    num2 = 1,
    i = 0;
  let nextNum;

  for (i; i <= totalCount; i++) {
    console.log(`num1---> ${num1} - num2---> ${num2} - i---> ${i}`);
    // console.log(`fibinocciSeries_${i}_num1`);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;

    // Add new para tag inside of the id="fibinocciSeries"
    var newPara = `<p id="fibinocciSeries_${i}_num1">${num1}</p>`;
    document
      .getElementById(`fibinocciSeries`)
      .insertAdjacentHTML("beforebegin", newPara);
    // document.getElementById(`fibinocciSeries_${i}_num1`).innerHTML = num1;
  }
};

fibinocciSeries(10);
