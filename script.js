
const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

/* function to insert number onclick */
function insert(num) {
  calculation.textContent += num;
  console.log(num);
}