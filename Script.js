function add() {
  let num1 = Number(document.getElementById("value1").value);
  let num2 = Number(document.getElementById("value2").value);

  let total = num1 + num2;

  console.log("Result : ", total);

  document.getElementById("result").innerText = total;
}
