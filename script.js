
const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

/* function to insert number onclick */
function insert(num) {
  calculation.textContent += num;
  console.log(num);
}

document.getElementById("clear").addEventListener("click", function () {
  calculation.textContent = "";
  result.textContent = 0;
});

document.getElementById("back").addEventListener("click", function () {
  var exp = calculation.textContent;
  calculation.textContent = exp.substring(0, exp.length-1);
});

document.getElementById("equal").addEventListener("click", function () {
  var exp = calculation.textContent;
  result.textContent = eval(exp);
  calculation.textContent = result.textContent;
});